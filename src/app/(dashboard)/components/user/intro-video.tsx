import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";
import { useIntroVideo } from "./interfaces/use-intro-video.interface";
interface IntroVideo {
	children?: (
		video: string,
		start: () => void,
		remove: () => Promise<void>,
	) => ReactNode;
}
export default function IntroVideo({ children }: IntroVideo) {
	const { Modal, video, start, remove, Dialog } = useIntroVideo();
	return (
		<Flex flex='column' className='h-[258px] gap-3'>
			<a href='#video' className='shrink-0'>
				<Flex className='items-center justify-between h-fit'>
					<p className='font-semibold lg:text-2xl'>Video Introduction</p>
					{children && children(video, start, remove)}
				</Flex>
			</a>
			{Boolean(video) && (
				<iframe
					src={video}
					className='aspect-video outline-2 outline-solid'
					loading='lazy'
				/>
			)}
			{Modal}
			{Dialog}
		</Flex>
	);
}
