import Flex from "@/components/layouts/flex";
import React from "react";
import ProjectContentOptions from "../add-portfolio-project/portfolio-project-content-options";
import { project_content_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import ContentBuilderImage from "./content-builder-image";
import ContentBuilderVideo from "./content-builder-video";
import ContentBuilderText from "./content-builder-text";
import { createId } from "@paralleldrive/cuid2";

export default function ContentBuilder() {
	const project_content = useAtomValue(project_content_jotai);
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
			<ProjectContentOptions />
			{Boolean(project_content.length) && (
				<Flex flex='column' className='h-fit gap-3'>
					{project_content
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
			)}
		</Flex>
	);
}
