import Flex from "@/components/layouts/flex";
import ContentBuilderImage from "../content-builder/content-builder-image";
import ContentBuilderVideo from "../content-builder/content-builder-video";
import ContentBuilderMarkdown from "../content-builder/content-builder-markdown";
import { ProjectContent } from "@/data/dashboard/dashboard-atoms/dashboard-data";

export default function PublishedProjectContent({
	content,
}: {
	content: ProjectContent;
}) {
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3 border-0 p-0'>
			{content
				.sort((a, b) => a.position - b.position)
				.map((component) => {
					if (component.type === "image")
						return (
							<ContentBuilderImage component={component} key={component.id} />
						);
					else if (component.type === "video")
						return (
							<ContentBuilderVideo component={component} key={component.id} />
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
	);
}
