import Flex from "@/components/layouts/flex";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtomValue } from "jotai";
import ContentImage from "./content-image";
import ContentVideo from "./content-video";
import ContentMarkdown from "./content-markdown";

export default function Content() {
	const project_content = useAtomValue(input_project_content_atom);
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
			{Boolean(project_content.length) && (
				<Flex flex='column' className='h-fit gap-3'>
					{project_content
						.sort((a, b) => a.position - b.position)
						.map((component) => {
							if (component.type === "image")
								return (
									<ContentImage component={component} key={component.id} />
								);
							else if (component.type === "video")
								return (
									<ContentVideo component={component} key={component.id} />
								);
							else if (component.type === "markdown")
								return (
									<ContentMarkdown component={component} key={component.id} />
								);
						})}
				</Flex>
			)}
		</Flex>
	);
}
