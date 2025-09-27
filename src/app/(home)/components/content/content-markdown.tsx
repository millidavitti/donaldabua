import Flex from "@/components/layouts/flex";
import md from "md";
import parse from "html-react-parser";
import { ProjectContent } from "@/data/dashboard/dashboard-atoms/types";

interface ContentMarkdown {
	component: ProjectContent;
}
export default function ContentMarkdown({ component }: ContentMarkdown) {
	return (
		<Flex flex='column' className='gap-3 relative'>
			{parse(md(component.markdown))}
		</Flex>
	);
}
