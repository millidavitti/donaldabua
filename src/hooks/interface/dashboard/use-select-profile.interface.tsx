import { deleteProfileController } from "@/backend/controllers/dashboard/profile/delete-profile.controller";
import {
	profile_snapshot_jotai,
	profiles_snapshot_jotai,
	Profile,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { useAtom, useSetAtom } from "jotai";
import useDialog from "../../use-dialog";
import { payload_view_atom } from "@/data/dashboard/dashboard-atoms/data";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { X, Trash2 } from "lucide-react";
import { useState } from "react";

export default function useSelectProfile() {
	const profile_snapshot_setter = useSetAtom(profile_snapshot_jotai);
	const profiles_snapshot_setter = useSetAtom(profiles_snapshot_jotai);
	const [payload_view] = useAtom(payload_view_atom);
	const profiles = payload_view.data?.profiles as Profile[];
	const { closeDialog, displayDialog } = useDialog();
	const [context, setContext] = useState<"view-profiles" | null>(null);

	function view() {
		setContext("view-profiles");
	}

	function close() {
		setContext(null);
	}

	function select(profile: Profile) {
		profile_snapshot_setter(profile);
		close();
	}

	async function remove(profileId: string) {
		if (profiles?.length > 1) {
			displayDialog();
			if (await new Promise(waitForDialog()))
				try {
					const { profile, error } = await deleteProfileController(profileId);

					if (error) throw new Error(error);
					else if (profile) {
						profiles_snapshot_setter(
							profiles?.filter((profile) => profile.id !== profileId),
						);
						profile_snapshot_setter(
							profiles?.filter((profile) => profile.id !== profileId)[0],
						);
					}
				} catch (error) {
					console.error("---useSelectProfileInterface:remove---\n", error);
				}
			closeDialog();
		}
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
						{profiles?.map((profile) => {
							return (
								<Flex key={profile.id} className='gap-3 border-0 p-0'>
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
										onClick={() => remove(profile.id)}
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
