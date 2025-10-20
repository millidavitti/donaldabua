import Flex from "@/components/layouts/flex";
import { useEditIntroVideo } from "@/hooks/interface/dashboard/use-edit-intro-video.interface";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Plus, Trash2 } from "lucide-react";

export default function EditIntroVideo() {
	const { Modal, video, start, remove } = useEditIntroVideo();
	return (
		<Flex flex='column' className='h-[258px] gap-3' htmlprops={{ id: "video" }}>
			<a href='#video' className='shrink-0'>
				<Flex className='h-fit items-center justify-between'>
					<p className='font-semibold lg:text-2xl'>Video Introduction</p>
					{Boolean(video) && (
						<InteractiveIcon callback={remove}>
							<Trash2 size={24} />
						</InteractiveIcon>
					)}
					{Boolean(video) || (
						<InteractiveIcon callback={start}>
							<Plus size={24} />
						</InteractiveIcon>
					)}
				</Flex>
			</a>
			{Boolean(video) && (
				<iframe
					src={video!}
					className='aspect-[16/9] outline-2 outline'
					loading='lazy'
				/>
			)}
			{Modal}
		</Flex>
	);
}
