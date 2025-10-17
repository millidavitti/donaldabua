import { useAtom } from "jotai";
import {
	mutate_user_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";
import Modal from "@/components/layouts/modal";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import Button from "@/components/ui/button";

export function useEditDisplayPicture() {
	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_user] = useAtom(mutate_user_atom);
	const [inputImage, setInputImage] = useState<string | null>(null);
	const [context, setContext] = useState<"edit-display-picture" | null>(null);
	const image = payload_view.data?.user.image;
	const edit = () => {
		setContext("edit-display-picture");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const close = () => {
		setContext(null);
		setInputImage(null);
		document.onkeydown = null;
	};

	const save = async () => {
		close();
		await mutate_user.mutateAsync({ image: inputImage! });
	};

	const capture = (value: string) => {
		setInputImage(value);
	};
	return {
		image: payload_view.data?.user.image,
		edit,

		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Photo</h2>
						<InteractiveIcon
							callback={() => {
								close();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface'
						onSubmit={(e) => {
							e.preventDefault();
							save();
						}}
					>
						<label className='text-lg font-semibold' htmlFor='title'>
							Provide a link to the to an photo of yourself
						</label>
						<input
							// type='url'
							required
							className='p-3 border w-full'
							value={inputImage ?? image}
							onChange={(e) => {
								capture(e.target.value);
							}}
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
