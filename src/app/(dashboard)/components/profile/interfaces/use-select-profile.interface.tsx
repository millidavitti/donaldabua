import { type Profile } from "@/data/types";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
	delete_profile_atom,
	payload_view_atom,
	profile_atom,
} from "@/data/data";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";
import { ReactNode, useState } from "react";
import useAlertDialog from "@/hooks/use-alert-dialog.interface";

/**
 * Hook to manage viewing, selecting, and removing user profiles.
 *
 * Provides:
 * - a function to open a profiles modal (view),
 * - a function to remove a profile with confirmation (remove),
 * - the current active profile (profile),
 * - and a Modal component that renders the profile list when active (Modal).
 *
 * Behavior and side effects:
 * - Reads the profile list from payload_view_atom and the active profile from profile_atom.
 * - Maintains an internal UI context ("view-profiles" | null) used to control rendering of the Modal.
 * - view(): sets the context to open the Modal and installs a document.onkeydown handler that closes the Modal on Escape.
 * - close(): clears the context and removes the document.onkeydown handler.
 * - select(profile): sets localStorage key "last-viewed-profile" to the profile id, updates the profile atom, and closes the Modal.
 * - remove(profile): shows a confirmation dialog (displayDialog + waitForDialog) and, if confirmed, calls delete_profile.mutateAsync(profile); the dialog is closed afterwards.
 *
 * Local storage:
 * - Uses the key "last-viewed-profile" to persist the last selected profile id.
 *
 * Notes:
 * - hasOneProfile is computed as profiles?.length - 1 < 1 (true when there are no additional profiles to switch to, i.e. profiles.length <= 1).
 * - The Modal is only available when the internal context is set; otherwise Modal is null.
 * - The Modal component expects an optional children callback that is invoked for each profile as children(profileId, remove).
 *
 * @returns An object containing:
 *   - view: () => void
 *       Opens the profiles modal and installs Escape key handling.
 *   - remove: (profile: Partial<Profile>) => Promise<void>
 *       Prompts the user for confirmation and deletes the profile if confirmed.
 *   - profile: Profile | undefined
 *       The currently active profile from profile_atom.
 *   - Modal: React.ComponentType<{ children?: (profileId: string, remove: (p: Partial<Profile>) => Promise<void>) => React.ReactNode }> | null
 *       A memoized Modal component that renders the profile list when the hook's context is active; null when closed.
 *
 * @remarks
 * - This hook depends on external atoms and dialog helpers: profile_atom, payload_view_atom, delete_profile_atom, useDialog, waitForDialog.
 * - The remove function uses delete_profile.mutateAsync to perform deletion.
 */
export default function useSelectProfile(
	children?: (
		profileId: string,
		remove: (profile: Partial<Profile>) => void,
	) => ReactNode,
) {
	const set_profile = useSetAtom(profile_atom);
	const [delete_profile] = useAtom(delete_profile_atom);
	const [payload_view] = useAtom(payload_view_atom);
	const profiles = payload_view.data?.profiles as Profile[];
	const profile = useAtomValue(profile_atom);
	const activeProfile = profile;
	const { startDialog, Dialog } = useAlertDialog();
	const [context, setContext] = useState<"view-profiles" | null>(null);
	const hasOneProfile = profiles?.length - 1 < 1;

	const view = () => {
		setContext("view-profiles");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const close = () => {
		setContext(null);
		document.onkeydown = null;
	};

	const select = (profile: Profile) => {
		localStorage.setItem("last-viewed-profile", profile.id);
		set_profile(profile);
		close();
	};

	async function remove(profile: Partial<Profile>) {
		if (await startDialog()) await delete_profile.mutateAsync(profile);
	}

	return {
		view,
		remove,
		profile,
		Modal: context && (
			<>
				<Modal close={close}>
					<Flex
						flex='column'
						className='bg-light-surface gap-3 basis-[720px] neonScan'
					>
						<Flex className='items-center justify-between'>
							<h2 className='text-2xl font-semibold'>Profiles</h2>
							<InteractiveIcon callback={() => close()}>
								<X size={24} className='stroke-light-error' />
							</InteractiveIcon>
						</Flex>
						{/* Profiles */}
						<Flex flex='column' className='gap-3 p-0 border-0'>
							{profiles?.map((profile) => {
								const lastViewed = localStorage.getItem("last-viewed-profile");
								const isSelected =
									profile.id === lastViewed || profile.id == activeProfile.id;
								return (
									<Flex
										key={profile.id}
										className={cn(
											"gap-3 border-0 p-0",
											isSelected && "hidden pointer-events-none",
										)}
									>
										<Button
											onClick={() => select(profile)}
											className='w-full shrink'
										>
											{profile.title}
										</Button>
										{children && children(profile.id, remove)}
									</Flex>
								);
							})}
							{hasOneProfile && (
								<p className='mx-auto font-medium'>No more profiles</p>
							)}
						</Flex>
					</Flex>
					{Dialog}
				</Modal>
			</>
		),
	};
}
