import InteractiveIcon from "@/components/layouts/interactive_icon";
import { VideoIcon } from "lucide-react";
import useDraftVideo from "@/hooks/interface/dashboard/use-draft-video.interface";

export default function DraftVideo() {
	const { Modal, set_content_hover_state, start } = useDraftVideo();
	return (
		<>
			{Modal}
			<InteractiveIcon
				className='border grow flex place-content-center'
				onClick={start}
				onMouseLeave={() => set_content_hover_state(null)}
				onMouseEnter={() => set_content_hover_state("hover-image-icon")}
			>
				<VideoIcon />
			</InteractiveIcon>
		</>
	);
}
