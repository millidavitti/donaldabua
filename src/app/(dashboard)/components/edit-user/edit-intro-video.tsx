import Flex from "@/components/layouts/flex";
import { useIntroVideo } from "@/hooks/interface/dashboard/use-edit-intro-video.interface";
import { ReactNode } from "react";
interface IntroVideo {
	children?: (
		video: string,
		start: () => void,
		remove: () => Promise<void>,
	) => ReactNode;
}
export default function IntroVideo({ children }: IntroVideo) {
	const { Modal, video, start, remove } = useIntroVideo();
	return (
		<Flex flex='column' className='h-[258px] gap-3'>
			<a href='#video' className='shrink-0'>
				<Flex className='h-fit items-center justify-between'>
					<p className='font-semibold lg:text-2xl'>Video Introduction</p>
					{children && children(video, start, remove)}
				</Flex>
			</a>
			{Boolean(video) && (
				<iframe
					src={video}
					className='aspect-[16/9] outline-2 outline'
					loading='lazy'
				/>
			)}
			{Modal}
		</Flex>
	);
}
