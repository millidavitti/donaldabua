import Flex from "@/components/layouts/flex";
import React from "react";
import ContentBuilderImage from "./content-builder-image";
import { createId } from "@paralleldrive/cuid2";
import ContentBuilderVideo from "./content-builder-video";
import ContentBuilderText from "./content-builder-text";
import { portfolio_project_content_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";

export default function PreviewPortfolioProjectContent() {
	const portfolio_project_content = useAtomValue(
		portfolio_project_content_jotai,
	);
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
			{portfolio_project_content
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
