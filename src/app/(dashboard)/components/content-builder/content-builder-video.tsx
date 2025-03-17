import Flex from "@/components/layouts/flex";
import {
	project_content_jotai,
	ProjectVideo,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import React, { useState } from "react";
import { component_to_edit_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import Button from "@/components/ui/button";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { toast } from "sonner";
import ContentBuilderMoveDownOption from "./content-builder-move-down-option";
import ContentBuilderMoveUpOption from "./content-builder-move-up-option";
import ContentBuilderDeleteOption from "./content-builder-delete-option";
import ContentBuilderEditOption from "./content-builder-edit-option";
import ContentBuilderOptionsDrawer from "./content-builder-options-drawer";

interface ContentBuilderVideo {
	component: ProjectVideo;
}
export default function ContentBuilderVideo({
	component,
}: ContentBuilderVideo) {
	const [component_to_edit, component_to_edit_setter] = useAtom(
		component_to_edit_jotai,
	);
	const [videoLink, setVideoLink] = useState(component.url);
	const project_content_setter = useSetAtom(project_content_jotai);
	return (
		<Flex flex='column' className='relative'>
			<ContentBuilderOptionsDrawer>
				<ContentBuilderEditOption componentID={component.id} />
				<ContentBuilderDeleteOption componentID={component.id} />
				<ContentBuilderMoveUpOption position={component.position} />
				<ContentBuilderMoveDownOption position={component.position} />
			</ContentBuilderOptionsDrawer>
			{component_to_edit === component.id || (
				<iframe src={component.url} className='aspect-[16/9]' loading='lazy' />
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
								project_content_setter((content) => {
									return content.map((obj) => {
										if (component.id === obj.id)
											return {
												...obj,
												url: videoLink,
											};
										return obj;
									});
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
