import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import {
	content_hover_state_jotai,
	edit_portfolio_project_jotai,
} from "@/data/atoms/ui_state";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { useSetAtom } from "jotai";
import { VideoIcon, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export default function EditPortfolioProjectVideo() {
	const edit_portfolio_project_setter = useSetAtom(
		edit_portfolio_project_jotai,
	);
	const [videoLink, setVideoLink] = useState<string | undefined>();
	const content_hover_state_setter = useSetAtom(content_hover_state_jotai);
	return (
		<>
			<InteractiveIcon
				className='outline'
				htmlProps={{
					onMouseEnter() {
						content_hover_state_setter("hover-video-icon");
					},
					onMouseLeave() {
						content_hover_state_setter(null);
					},
					onClick() {
						edit_portfolio_project_setter("edit-portfolio-project-video");
					},
				}}
			>
				<VideoIcon />
			</InteractiveIcon>
			<Overlay
				stateFlag='edit-portfolio-project-video'
				className='flex justify-center items-center'
			>
				<Flex flex='column' className='bg-light-surface gap-3 basis-[720px]'>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Link to a Video</h2>
						<InteractiveIcon
							callback={() => edit_portfolio_project_setter(null)}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Nested Form */}
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your YouTube
						</label>
						<input
							type='text'
							id='title'
							required
							value={videoLink || ""}
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

						<iframe
							src={videoLink || undefined}
							data-is-visible={Boolean(videoLink)}
							className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline'
						/>
						<Button className='bg-black text-light-surface'>Add</Button>
					</Flex>
				</Flex>
			</Overlay>
		</>
	);
}
