import Flex from "@/components/layouts/flex";
import {
	portfolio_project_data_jotai,
	PortfolioProjectVideo,
} from "@/data/atoms/app_data";
import React, { useState } from "react";
import ContentBuilderOptions from "./content-builder-options";
import { component_to_edit_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import Button from "@/components/ui/button";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { toast } from "sonner";

interface ContentBuilderVideo {
	component: PortfolioProjectVideo;
}
export default function ContentBuilderVideo({
	component,
}: ContentBuilderVideo) {
	const [component_to_edit, component_to_edit_setter] = useAtom(
		component_to_edit_jotai,
	);
	const [videoLink, setVideoLink] = useState(component.url);
	const portfolio_project_data_setter = useSetAtom(
		portfolio_project_data_jotai,
	);
	return (
		<Flex flex='column' className='relative'>
			<ContentBuilderOptions
				component={component}
				edit={() =>
					component_to_edit === component.id
						? component_to_edit_setter(null)
						: component_to_edit_setter(component.id)
				}
			/>
			{component_to_edit === component.id || (
				<iframe src={component.url} className='aspect-[16/9]' />
			)}
			{component_to_edit === component.id && (
				<Flex flex='column' className='bg-light-surface gap-3'>
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your video
						</label>
						<input
							type='url'
							id='title'
							required
							value={videoLink}
							onChange={(e) => {
								const youtubeEmbed = validateAndEmbedYouTubeUrl(e.target.value);
								if (youtubeEmbed) setVideoLink(youtubeEmbed);
								else
									toast.info(
										"Provided an invalid YouTube link: " + e.target.value,
									);
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
												url: videoLink,
											};
										return obj;
									});
									return {
										...data,
										content: update,
									};
								});
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
