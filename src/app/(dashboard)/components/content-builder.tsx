import Flex from "@/components/layouts/flex";
import React from "react";
import ProjectContentOptions from "./project-content-options";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import ContentBuilderImage from "./content-builder-image";
import ContentBuilderVideo from "./content-builder-video";
import ContentBuilderText from "./content-builder-text";
import { createId } from "@paralleldrive/cuid2";

export default function ContentBuilder() {
	const portfolio_project_data = useAtomValue(portfolio_project_data_jotai);

	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
			<Flex flex='column' className='grow gap-3'>
				{portfolio_project_data.content.map((component) => {
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
			<ProjectContentOptions />
		</Flex>
	);
}
