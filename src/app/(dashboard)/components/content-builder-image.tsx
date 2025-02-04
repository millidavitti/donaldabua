import Flex from "@/components/layouts/flex";
import Image from "next/image";
import React, { useState } from "react";
import ContentBuilderOptions from "./content-builder-options";
import {
	portfolio_project_data_jotai,
	PortfolioProjectImage,
} from "@/data/atoms/app_data";
import { useAtom, useSetAtom } from "jotai";
import { component_to_edit_jotai } from "@/data/atoms/ui_state";
import Button from "@/components/ui/button";

interface ContentBuilderImage {
	component: PortfolioProjectImage;
}
export default function ContentBuilderImage({
	component,
}: ContentBuilderImage) {
	const [component_to_edit, component_to_edit_setter] = useAtom(
		component_to_edit_jotai,
	);
	const [imageLink, setImageLink] = useState(component.url);
	const portfolio_project_data_setter = useSetAtom(
		portfolio_project_data_jotai,
	);
	return (
		<Flex flex='column'>
			<ContentBuilderOptions
				componentID={component.id}
				edit={() =>
					component_to_edit === component.id
						? component_to_edit_setter(null)
						: component_to_edit_setter(component.id)
				}
			/>
			{component_to_edit === component.id || (
				<Image src={component.url} width={1000} height={1000} alt='' />
			)}
			{component_to_edit === component.id && (
				<Flex flex='column' className='bg-light-surface gap-3'>
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
								portfolio_project_data_setter((data) => {
									const update = data.content.map((obj) => {
										if (component.id === obj.id)
											return {
												...obj,
												url: imageLink,
											};
										return obj;
									});
									return {
										...data,
										content: update,
									};
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
