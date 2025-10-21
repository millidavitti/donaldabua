import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { content_hover_state_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-ui-state";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { createId } from "@paralleldrive/cuid2";
import { useSetAtom } from "jotai";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function useDraftImage() {
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const set_content_hover_state = useSetAtom(content_hover_state_jotai);
	const [url, setUrl] = useState("");
	const [context, setContext] = useState<"add-project-image" | null>(null);

	const start = () => {
		setContext("add-project-image");
	};
	const add = (url: string) => {
		set_input_project_content((content) => [
			...content,
			{
				id: createId(),
				url,
				position: content.length,
				type: "image",
			},
		]);
		setUrl("");
		setContext(null);
	};
	const close = () => {
		setContext(null);
	};
	return {
		set_content_hover_state,
		start,
		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Link to an Image</h2>
						<InteractiveIcon callback={() => setContext(null)}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Nested Form */}
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your image
						</label>
						<input
							type='url'
							id='add-portfolio-project-image'
							placeholder='Paste a valid Cloudinary link'
							required
							value={url}
							onChange={(e) => {
								if (e.target.validity.valid) setUrl(e.target.value);
							}}
							className='border p-3'
						/>

						{url && (
							<Image
								src={url}
								width={1000}
								height={1000}
								alt='thumbnail'
								className='aspect-[16/9] outline-2 outline neonScan'
							/>
						)}
						<Button
							className='bg-black text-light-surface'
							onClick={() => {
								const formElement = document.querySelector(
									"#add-portfolio-project-image",
								);

								if ((formElement as HTMLInputElement).validity.valid) add(url);
							}}
						>
							Add
						</Button>
					</Flex>
				</Flex>
			</Modal>
		),
	};
}
