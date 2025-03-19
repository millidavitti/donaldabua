import Flex from "@/components/layouts/flex";
import { ProjectMarkdown } from "@/data/home/home-atoms/home-data";
import md from "md";
import parse from "html-react-parser";

interface ContentMarkdown {
	component: ProjectMarkdown;
}
export default function ContentMarkdown({ component }: ContentMarkdown) {
	return (
		<Flex flex='column' className='gap-3 relative'>
			{parse(md(component.markdown))}
		</Flex>
	);
}
