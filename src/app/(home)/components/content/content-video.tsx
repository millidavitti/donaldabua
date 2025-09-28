import Flex from "@/components/layouts/flex";
import { ProjectContent } from "@/data/dashboard/dashboard-atoms/types";

interface ContentVideo {
	component: ProjectContent;
}
export default function ContentVideo({ component }: ContentVideo) {
	return (
		<Flex flex='column' className='relative'>
			<iframe src={component.url!} className='aspect-[16/9]' loading='lazy' />
		</Flex>
	);
}
