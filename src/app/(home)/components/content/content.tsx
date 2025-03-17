import Flex from "@/components/layouts/flex";
import { project_content_jotai } from "@/data/home/home-atoms/home-data.ts";
import { useAtomValue } from "jotai";
import ContentImage from "./content-image";
import ContentVideo from "./content-video";
import ContentMarkdown from "./content-markdown";
import { createId } from "@paralleldrive/cuid2";

export default function Content() {
	const project_content = useAtomValue(project_content_jotai);
	return (
		<Flex
			flex='column'
			className='basis-[360px] grow-[2] gap-3'
			htmlProps={{ id: "content-builder" }}
		>
			{Boolean(project_content.length) && (
				<Flex flex='column' className='h-fit gap-3'>
					{project_content
						.sort((a, b) => a.position - b.position)
						.map((component) => {
							if (component.type === "image")
								return <ContentImage component={component} key={createId()} />;
							else if (component.type === "video")
								return <ContentVideo component={component} key={createId()} />;
							else if (component.type === "markdown")
								return (
									<ContentMarkdown component={component} key={createId()} />
								);
						})}
				</Flex>
			)}
		</Flex>
	);
}
