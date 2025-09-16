import { Profile } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtom, useAtomValue } from "jotai";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import {
	input_profile_atom,
	mutate_profile_atom,
	profile_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { HashLoader } from "react-spinners";

export function useEditProfileOverview() {
	const [input_profile, set_input_profile] = useAtom(input_profile_atom);
	const profile = useAtomValue(profile_atom);
	const [mutate_profile] = useAtom(mutate_profile_atom);
	const [context, setContext] = useState<"update" | null>(null);

	function start() {
		setContext("update");
	}

	function close() {
		setContext(null);
	}

	async function update(profile: Partial<Profile>) {
		await mutate_profile.mutateAsync(profile);
		close();
	}

	function captureInput(overview: string) {
		set_input_profile({ id: profile.id, overview });
	}
	return {
		start,
		overview: profile?.overview || "",
		Modal: context && (
			<Modal>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Profile Overview</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							update(input_profile);
						}}
					>
						<textarea
							id='profile-overview'
							required
							rows={20}
							defaultValue={profile?.overview}
							onChange={(e) => {
								captureInput(e.target.value);
							}}
							className='border p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save{" "}
							{mutate_profile.isPending && (
								<HashLoader color='#fff' size={24} />
							)}
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
