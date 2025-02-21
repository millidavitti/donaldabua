import Flex from "@/components/layouts/flex";
import { content_hover_state_jotai } from "@/data/atoms/ui_state";
import { useAtomValue } from "jotai";
import React from "react";
import AddProjectVideo from "./add-project-video";
import AddProjectImage from "./add-project-image";
import AddProjectMarkdown from "./add-project-text";

export default function ProjectContentOptions() {
	const content_hover_state = useAtomValue(content_hover_state_jotai);
	return (
		<Flex flex='column' className='grow justify-center items-center gap-3'>
			<Flex className='gap-3 flex-wrap'>
				<AddProjectImage />
				<AddProjectVideo />
				<AddProjectMarkdown />
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
