import { Profile } from "@/data/dashboard/dashboard-atoms/types";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { useAtom, useSetAtom } from "jotai";
import useDialog from "../../use-dialog";
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
import { X, Trash2 } from "lucide-react";
import { useState } from "react";

export default function useSelectProfile() {
	const set_profile = useSetAtom(profile_atom);
	const [delete_profile] = useAtom(delete_profile_atom);
	const [payload_view] = useAtom(payload_view_atom);
	const profiles = payload_view.data?.profiles as Profile[];
	const { closeDialog, displayDialog } = useDialog();
	const [context, setContext] = useState<"view-profiles" | null>(null);

	const view = () => {
		setContext("view-profiles");
	};

	const close = () => {
		setContext(null);
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
		Modal: context && (
			<Modal>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Profiles</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Profiles */}
					<Flex flex='column' className='gap-3 border-0 p-0'>
						{profiles?.map((profile, i) => {
							const lastViewed = localStorage.getItem("last-viewed-profile");
							const isFirstProfile = !i;
							return (
								<Flex
									key={profile.id}
									className={cn(
										"gap-3 border-0 p-0",
										(profile.id === lastViewed || isFirstProfile) &&
											"hidden pointer-events-none",
									)}
								>
									<Button
										onClick={() => select(profile)}
										className='w-full shrink'
									>
										{profile.title}
									</Button>
									<Trash2
										className={cn(
											"stroke-light-error shrink-0 self-center cursor-pointer active:scale-95 transition",
											profiles?.length < 2 && "hidden",
										)}
										onClick={() => remove({ id: profile.id })}
									/>
								</Flex>
							);
						})}
					</Flex>
				</Flex>
			</Modal>
		),
	};
}
