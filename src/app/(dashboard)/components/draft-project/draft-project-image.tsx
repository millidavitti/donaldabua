import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ImageIcon } from "lucide-react";
import useDraftProjectImage from "@/hooks/interface/dashboard/use-draft-project-image.interface";

export default function DraftProjectImage() {
	const { Modal, set_content_hover_state, start } = useDraftProjectImage();
	return (
		<>
			{Modal}
			<InteractiveIcon
				className='border grow flex place-content-center'
				htmlProps={{
					onMouseEnter() {
						set_content_hover_state("hover-image-icon");
					},
					onMouseLeave() {
						set_content_hover_state(null);
					},
					onClick() {
						start();
					},
				}}
			>
				<ImageIcon />
			</InteractiveIcon>
		</>
	);
}
