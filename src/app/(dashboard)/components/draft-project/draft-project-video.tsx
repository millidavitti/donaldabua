import InteractiveIcon from "@/components/layouts/interactive_icon";
import { VideoIcon } from "lucide-react";
import useDraftProjectVideo from "@/hooks/interface/dashboard/use-draft-project-video.interface";

export default function DraftProjectVideo() {
	const { Modal, set_content_hover_state, start } = useDraftProjectVideo();
	return (
		<>
			{Modal}
			<InteractiveIcon
				className='border grow flex place-content-center'
				htmlProps={{
					onMouseEnter() {
						set_content_hover_state("hover-video-icon");
					},
					onMouseLeave() {
						set_content_hover_state(null);
					},
					onClick() {
						start();
					},
				}}
			>
				<VideoIcon />
			</InteractiveIcon>
		</>
	);
}
