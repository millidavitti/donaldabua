import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { project_content_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import {
	content_hover_state_jotai,
	project_draft_view_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { createId } from "@paralleldrive/cuid2";
import { useSetAtom } from "jotai";
import { VideoIcon, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export default function DraftProjectVideo() {
	const [videoLink, setVideoLink] = useState("");
	const project_draft_view_setter = useSetAtom(project_draft_view_jotai);
	const content_hover_state_setter = useSetAtom(content_hover_state_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	return (
		<>
			<InteractiveIcon
				className='outline grow flex place-content-center'
				htmlProps={{
					onMouseEnter() {
						content_hover_state_setter("hover-video-icon");
					},
					onMouseLeave() {
						content_hover_state_setter(null);
					},
					onClick() {
						project_draft_view_setter("edit-project-video");
					},
				}}
			>
				<VideoIcon />
			</InteractiveIcon>
			<Overlay
				stateFlag='edit-project-video'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Link to a Video</h2>
						<InteractiveIcon callback={() => project_draft_view_setter(null)}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Nested Form */}
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your YouTube
						</label>

						<input
							type='url'
							id='add-portfolio-project-video'
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

						{videoLink && (
							<iframe
								src={videoLink}
								data-is-visible={Boolean(videoLink)}
								className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline neonScan'
								loading='lazy'
							/>
						)}
						<Button
							className='bg-black text-light-surface'
							onClick={() => {
								const formElement = document.querySelector(
									"#add-portfolio-project-video",
								);
								if ((formElement as HTMLInputElement).validity.valid)
									project_content_setter((content) => [
										...content,
										{
											id: createId(),
											url: videoLink,
											position: content.length,
											type: "video",
										},
									]);
								setVideoLink("");
								project_draft_view_setter(null);
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
