import Flex from "@/components/layouts/flex";
import ContentBuilderImage from "../content-builder/content-builder-image";
import ContentBuilderVideo from "../content-builder/content-builder-video";
import ContentBuilderMarkdown from "../content-builder/content-builder-markdown";
import { input_project_content_atom } from "@/data/data";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

export default function DraftPreviewContent() {
	const input_project_content = useAtomValue(input_project_content_atom);
	const sorted = useMemo(
		() => [...input_project_content].sort((a, b) => a.position - b.position),
		[input_project_content],
	);
	return (
		<Flex flex='column' className='basis-[360px] grow-2 gap-3 border-0 p-0'>
			{sorted.map((component) => {
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
						<ContentBuilderMarkdown component={component} key={component.id} />
					);
			})}
		</Flex>
	);
}
