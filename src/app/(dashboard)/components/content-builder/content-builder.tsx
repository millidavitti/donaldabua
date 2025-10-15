import Flex from "@/components/layouts/flex";
import DraftProjectContentOptions from "../draft-project/draft-project-content-options";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtomValue } from "jotai";
import ContentBuilderImage from "./content-builder-image";
import ContentBuilderVideo from "./content-builder-video";
import ContentBuilderMarkdown from "./content-builder-markdown";

export default function ContentBuilder() {
	const input_project_content = useAtomValue(input_project_content_atom);

	return (
		<Flex
			flex='column'
			className='basis-[360px] grow-[2] gap-3'
			htmlProps={{ id: "content-builder" }}
		>
			<DraftProjectContentOptions />
			{Boolean(input_project_content.length) && (
				<Flex flex='column' className='h-fit gap-3 p-0 border-none'>
					{input_project_content
						.sort((a, b) => a.position - b.position)
						.map((component) => {
							if (component.type === "image")
								return (
									<ContentBuilderImage
										component={component}
										key={component.id}
									/>
								);
							else if (component.type === "video")
								return (
									<ContentBuilderVideo
										component={component}
										key={component.id}
									/>
								);
							else if (component.type === "markdown")
								return (
									<ContentBuilderMarkdown
										component={component}
										key={component.id}
									/>
								);
						})}
				</Flex>
			)}
		</Flex>
	);
}
