import Flex from "@/components/layouts/flex";
import { ProjectContent } from "@/data/dashboard/dashboard-atoms/types";
import Image from "next/image";

interface ContentImage {
	component: ProjectContent;
}
export default function ContentImage({ component }: ContentImage) {
	return (
		<Flex flex='column' className='relative outline-0 border'>
			<Image
				src={component.url!}
				width={1000}
				height={1000}
				alt=''
				className='neonScan'
			/>
		</Flex>
	);
}
