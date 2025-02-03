import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { content_hover_state_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { ImageIcon, Text } from "lucide-react";
import React from "react";
import EditPortfolioProjectVideo from "./edit-portfolio-project-video";
import EditPortfolioProjectImage from "./edit-portfolio-project-image";

export default function ProjectContentOptions() {
	const [content_hover_state, content_hover_state_setter] = useAtom(
		content_hover_state_jotai,
	);
	return (
		<Flex
			flex='column'
			className='basis-[360px] grow justify-center items-center gap-3'
		>
			<Flex className='gap-8'>
				<EditPortfolioProjectImage />
				<EditPortfolioProjectVideo />
				<InteractiveIcon
					className='outline'
					htmlProps={{
						onMouseEnter() {
							content_hover_state_setter("hover-text-icon");
						},
						onMouseLeave() {
							content_hover_state_setter(null);
						},
					}}
				>
					<Text />
				</InteractiveIcon>
			</Flex>
			{/* Text */}
			<p className='font-semibold'>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={content_hover_state === null}
				>
					Add Content
				</span>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={content_hover_state === "hover-image-icon"}
				>
					Link Images
				</span>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={content_hover_state === "hover-video-icon"}
				>
					Link Videos
				</span>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={content_hover_state === "hover-text-icon"}
				>
					Add Text Block
				</span>
			</p>
		</Flex>
	);
}
