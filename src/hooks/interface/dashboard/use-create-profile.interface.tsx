import { useAtom } from "jotai";
import { useState } from "react";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { X } from "lucide-react";
import { HashLoader } from "react-spinners";
import {
	create_profile_atom,
	input_profile_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useResetAtom } from "jotai/utils";

export default function useCreateProfile() {
	const [input_profile, set_input_profile] = useAtom(input_profile_atom);
	const reset_input_profile = useResetAtom(input_profile_atom);
	const [context, setContext] = useState<"create" | null>(null);
	const [create_profile] = useAtom(create_profile_atom);
	const isPending = create_profile.isPending;

	function viewForm() {
		setContext("create");
	}

	function close() {
		setContext(null);
		reset_input_profile();
	}

	async function createProfile() {
		await create_profile.mutateAsync(input_profile);
		close();
	}

	function captureInput(value: string) {
		set_input_profile({ title: value });
	}
	return {
		viewForm,
		Modal: context && (
			<Modal>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center p-0'>
						<Flex flex='column' className='border-0'>
							<h2 className='text-2xl font-semibold'>Profile Title</h2>
							<p>
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
							createProfile();
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='text'
							id='title'
							required
							value={input_profile.title}
							onChange={(e) => {
								captureInput(e.target.value);
							}}
							className='border p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Create Profile{" "}
							{isPending && <HashLoader size={24} color='#fff' />}
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
