import Flex from "@/components/layouts/flex";
import ContentImage from "../content/content-image";
import { createId } from "@paralleldrive/cuid2";
import ContentBuilderVideo from "../content/content-video";
import ContentMarkdown from "../content/content-markdown";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtomValue } from "jotai";

export default function ProjectContent() {
	const project_content = useAtomValue(input_project_content_atom);
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3 border-0 p-0'>
			{project_content
				.sort((a, b) => a.position - b.position)
				.map((component) => {
					if (component.type === "image")
						return <ContentImage component={component} key={createId()} />;
					else if (component.type === "video")
						return (
							<ContentBuilderVideo component={component} key={createId()} />
						);
					else if (component.type === "markdown")
						return <ContentMarkdown component={component} key={createId()} />;
				})}
		</Flex>
	);
}
