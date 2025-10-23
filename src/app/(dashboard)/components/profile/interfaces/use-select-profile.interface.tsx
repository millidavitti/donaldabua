import { type Profile } from "@/data/dashboard/dashboard-atoms/types";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useDialog from "../../../../../hooks/use-dialog";
import {
	delete_profile_atom,
	payload_view_atom,
	profile_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";
import { memo, ReactNode, useState } from "react";

export interface Profiles {
	children?: (
		profileId: string,
		remove: (profile: Partial<Profile>) => void,
	) => ReactNode;
}
export default function useSelectProfile() {
	const set_profile = useSetAtom(profile_atom);
	const [delete_profile] = useAtom(delete_profile_atom);
	const [payload_view] = useAtom(payload_view_atom);
	const profiles = payload_view.data?.profiles as Profile[];
	const profile = useAtomValue(profile_atom);
	const activeProfile = profile;
	const { closeDialog, displayDialog } = useDialog();
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
		if (profiles?.length < 1) return;
		displayDialog();
		if (await new Promise(waitForDialog())) {
			await delete_profile.mutateAsync(profile);
		}
		closeDialog();
	}
	return {
		view,
		remove,
		profile,
		Modal:
			context &&
			memo(function Profiles({ children }: Profiles) {
				return (
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
									const lastViewed = localStorage.getItem(
										"last-viewed-profile",
									);
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
					</Modal>
				);
			}),
	};
}
