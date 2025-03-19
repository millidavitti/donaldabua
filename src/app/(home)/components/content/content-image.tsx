import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { ProjectImage } from "@/data/home/home-atoms/home-data";

interface ContentImage {
	component: ProjectImage;
}
export default function ContentImage({ component }: ContentImage) {
	return (
		<Flex flex='column' className='relative outline-0 border'>
			<Image
				src={component.url}
				width={1000}
				height={1000}
				alt=''
				className='neonScan'
			/>
		</Flex>
	);
}
