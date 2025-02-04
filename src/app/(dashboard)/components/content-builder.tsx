import Flex from "@/components/layouts/flex";
import React from "react";
import ProjectContentOptions from "./project-content-options";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import ContentBuilderImage from "./content-builder-image";
import ContentBuilderVideo from "./content-builder-video";
import md from "md";
import parse from "html-react-parser";
export default function ContentBuilder() {
	const portfolio_project_data = useAtomValue(portfolio_project_data_jotai);
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
			<Flex flex='column' className='grow gap-3'>
				{portfolio_project_data.content.map((el) => {
					if (el.type === "image")
						return <ContentBuilderImage url={el.url} key={el.position} />;
					else if (el.type === "video")
						return <ContentBuilderVideo url={el.url} key={el.position} />;
					else if (el.type === "text")
						return (
							<Flex flex='column' key={el.position}>
								{parse(md(el.markdown))}
							</Flex>
						);
				})}
			</Flex>
			<ProjectContentOptions />
		</Flex>
	);
}
