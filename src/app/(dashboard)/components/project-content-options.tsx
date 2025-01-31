import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ImageIcon, Text, VideoIcon } from "lucide-react";
import React, { useState } from "react";

export default function ProjectContentOptions() {
	const [hoverState, setHoverState] = useState<
		"hover-image-icon" | "hover-video-icon" | "hover-text-icon" | null
	>(null);
	return (
		<Flex
			flex='column'
			className='basis-[360px] grow justify-center items-center gap-3'
		>
			<Flex className='gap-8'>
				<InteractiveIcon
					className='outline'
					htmlProps={{
						onMouseEnter() {
							console.log("first");
							setHoverState("hover-image-icon");
						},
						onMouseLeave() {
							setHoverState(null);
						},
					}}
				>
					<ImageIcon />
				</InteractiveIcon>
				<InteractiveIcon
					className='outline'
					htmlProps={{
						onMouseEnter() {
							setHoverState("hover-video-icon");
						},
						onMouseLeave() {
							setHoverState(null);
						},
					}}
				>
					<VideoIcon />
				</InteractiveIcon>
				<InteractiveIcon
					className='outline'
					htmlProps={{
						onMouseEnter() {
							setHoverState("hover-text-icon");
						},
						onMouseLeave() {
							setHoverState(null);
						},
					}}
				>
					<Text />
				</InteractiveIcon>
			</Flex>
			<p className='font-semibold'>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={hoverState === null}
				>
					Add Content
				</span>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={hoverState === "hover-image-icon"}
				>
					Link Images
				</span>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={hoverState === "hover-video-icon"}
				>
					Link Videos
				</span>
				<span
					className='data-[is-hovered=false]:hidden'
					data-is-hovered={hoverState === "hover-text-icon"}
				>
					Add Text Block
				</span>
			</p>
		</Flex>
	);
}
