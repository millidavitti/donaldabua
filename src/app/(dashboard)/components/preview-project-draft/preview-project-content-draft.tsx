import Flex from "@/components/layouts/flex";
import React from "react";
import ContentBuilderImage from "../content-builder/content-builder-image";
import { createId } from "@paralleldrive/cuid2";
import ContentBuilderVideo from "../content-builder/content-builder-video";
import ContentBuilderText from "../content-builder/content-builder-text";
import { project_content_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtomValue } from "jotai";

export default function PreviewProjectContent() {
	const portfolio_project_content = useAtomValue(project_content_jotai);
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3 border-0 p-0'>
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
					else if (component.type === "markdown")
						return (
							<ContentBuilderText component={component} key={createId()} />
						);
				})}
		</Flex>
	);
}
