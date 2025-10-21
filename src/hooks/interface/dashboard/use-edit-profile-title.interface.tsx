import { useAtom } from "jotai";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import {
	mutate_profile_atom,
	profile_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { HashLoader } from "react-spinners";

export function useEditProfileTitle() {
	const [inputTitle, setInputTitle] = useState<string | null>(null);
	const [context, setContext] = useState<"edit-title" | null>(null);
	const [mutate_profile] = useAtom(mutate_profile_atom);
	const [profile] = useAtom(profile_atom);
	const title = profile?.title;
	const isPending = mutate_profile.isPending;

	const start = () => {
		setContext("edit-title");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const close = () => {
		setContext(null);
		setInputTitle(null);
		document.onkeydown = null;
	};

	const captureInput = (title: string) => {
		setInputTitle(title);
	};

	async function update(title: string) {
		await mutate_profile.mutateAsync({ id: profile.id, title });
		close();
	}

	return {
		start,
		close,
		title,
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
							update(inputTitle ?? title);
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='text'
							id='title'
							required
							value={inputTitle ?? title}
							onChange={(e) => {
								captureInput(e.target.value);
							}}
							className='border p-3'
						/>
						<Button
							type='submit'
							className='bg-black text-light-surface'
							htmlprops={{ disabled: isPending }}
						>
							Save {isPending && <HashLoader color='#fff' size={24} />}
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
