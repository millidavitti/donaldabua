import Flex from "@/components/layouts/flex";
import React from "react";
import ContentBuilderImage from "../content-builder/content-builder-image";
import { createId } from "@paralleldrive/cuid2";
import ContentBuilderVideo from "../content-builder/content-builder-video";
import ContentBuilderText from "../content-builder/content-builder-text";
import {
	PortfolioProjectImage,
	PortfolioProjectText,
	PortfolioProjectVideo,
} from "@/data/atoms/app_data";

interface PublishedPortfolioProjectContent {
	content: (
		| PortfolioProjectImage
		| PortfolioProjectVideo
		| PortfolioProjectText
	)[];
}
export default function PublishedPortfolioProjectContent({
	content,
}: PublishedPortfolioProjectContent) {
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
			{content
				.sort((a, b) => a.position - b.position)
				.map((component) => {
					if (component.type === "image")
						return (
							<ContentBuilderImage component={component} key={createId()} />
						);
					else if (component.type === "video")
						return (
							<ContentBuilderVideo component={component} key={createId()} />
						);
					else if (component.type === "text")
						return (
							<ContentBuilderText component={component} key={createId()} />
						);
				})}
		</Flex>
	);
}
