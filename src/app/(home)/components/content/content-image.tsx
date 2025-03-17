import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { useState } from "react";
import {
	project_content_jotai,
	ProjectImage,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtom, useSetAtom } from "jotai";
import { component_to_edit_jotai } from "@/data/atoms/ui_state";
import Button from "@/components/ui/button";

interface ContentImage {
	component: ProjectImage;
}
export default function ContentImage({ component }: ContentImage) {
	const [component_to_edit, component_to_edit_setter] = useAtom(
		component_to_edit_jotai,
	);
	const [imageLink, setImageLink] = useState(component.url);
	const project_content_setter = useSetAtom(project_content_jotai);
	return (
		<Flex flex='column' className='relative'>
			{component_to_edit === component.id || (
				<Image
					src={component.url}
					width={1000}
					height={1000}
					alt=''
					className='neonScan'
				/>
			)}
			{component_to_edit === component.id && (
				<Flex flex='column' className='bg-light-surface gap-3 neonScan'>
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your image
						</label>
						<input
							type='url'
							id='title'
							required
							value={imageLink}
							onChange={(e) => {
								setImageLink(e.target.value);
							}}
							className='outline p-3'
						/>

						<Button
							className='bg-black text-light-surface'
							onClick={() => {
								project_content_setter((content) => {
									return content.map((obj) => {
										if (component.id === obj.id)
											return {
												...obj,
												url: imageLink,
											};
										return obj;
									});
								});
								setImageLink("");
								component_to_edit_setter(null);
							}}
						>
							Save
						</Button>
					</Flex>
				</Flex>
			)}
		</Flex>
	);
}
