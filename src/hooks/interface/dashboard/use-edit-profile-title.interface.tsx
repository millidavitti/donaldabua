import { Profile } from "@/data/dashboard/dashboard-atoms/types";
import { useAtom } from "jotai";
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

export function useEditProfileTitle() {
	const [input_profile, set_input_profile] = useAtom(input_profile_atom);
	const [context, setContext] = useState<"edit-title" | null>(null);
	const [mutate_profile] = useAtom(mutate_profile_atom);
	const [profile] = useAtom(profile_atom);
	const isPending = mutate_profile.isPending;
	function start() {
		setContext("edit-title");
	}

	function close() {
		setContext(null);
	}

	async function update(profile: Partial<Profile>) {
		await mutate_profile.mutateAsync(profile);
		close();
	}

	function captureInput(value: string) {
		set_input_profile({ id: profile.id, title: value });
	}
	return {
		start,
		close,
		title: profile?.title,
		Modal: context && (
			<Modal>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<Flex flex='column' className='border-0 p-0'>
							<h2 className='text-2xl font-semibold'>Edit your title</h2>
							<p className='max-w-[75%]'>
								Enter a single sentence description of your professional
								skills/experience (e.g. Expert Web Designer with Ajax
								experience)
							</p>
						</Flex>
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
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='text'
							id='title'
							required
							defaultValue={profile.title}
							onChange={(e) => {
								captureInput(e.target.value);
							}}
							className='border p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save {isPending && <HashLoader color='#fff' size={24} />}
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
