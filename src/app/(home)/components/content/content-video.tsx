import Flex from "@/components/layouts/flex";
import { ProjectVideo } from "@/data/home/home-atoms/home-data";

interface ContentVideo {
	component: ProjectVideo;
}
export default function ContentVideo({ component }: ContentVideo) {
	return (
		<Flex flex='column' className='relative'>
			<iframe src={component.url} className='aspect-[16/9]' loading='lazy' />
		</Flex>
	);
}
