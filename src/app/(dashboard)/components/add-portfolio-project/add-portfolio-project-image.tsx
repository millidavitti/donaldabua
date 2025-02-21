import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { project_content_jotai } from "@/data/atoms/app_data";
import {
	content_hover_state_jotai,
	edit_project_jotai,
} from "@/data/atoms/ui_state";
import { createId } from "@paralleldrive/cuid2";

import { useSetAtom } from "jotai";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function AddProjectImage() {
	const edit_project_setter = useSetAtom(edit_project_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	const content_hover_state_setter = useSetAtom(content_hover_state_jotai);
	const [imageLink, setImageLink] = useState("");

	return (
		<>
			<InteractiveIcon
				className='outline grow flex place-content-center'
				htmlProps={{
					onMouseEnter() {
						content_hover_state_setter("hover-image-icon");
					},
					onMouseLeave() {
						content_hover_state_setter(null);
					},
					onClick() {
						edit_project_setter("edit-portfolio-project-image");
					},
				}}
			>
				<ImageIcon />
			</InteractiveIcon>
			<Overlay
				stateFlag='edit-portfolio-project-image'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Link to an Image</h2>
						<InteractiveIcon callback={() => edit_project_setter(null)}>
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
							value={imageLink || ""}
							onChange={(e) => {
								if (e.target.validity.valid) setImageLink(e.target.value);
								else setImageLink("");
							}}
							className='outline p-3'
						/>

						{imageLink && (
							<Image
								src={imageLink}
								width={1000}
								height={1000}
								alt='thumbnail'
								data-is-visible={Boolean(imageLink)}
								className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline neonScan'
							/>
						)}
						<Button
							className='bg-black text-light-surface'
							onClick={() => {
								const formElement = document.querySelector(
									"#add-portfolio-project-image",
								);
								if ((formElement as HTMLInputElement).validity.valid)
									project_content_setter((content) => [
										...content,
										{
											id: createId(),
											url: imageLink,
											position: content.length,
											type: "image",
										},
									]);
								setImageLink("");
								edit_project_setter(null);
							}}
						>
							Add
						</Button>
					</Flex>
				</Flex>
			</Overlay>
		</>
	);
}
