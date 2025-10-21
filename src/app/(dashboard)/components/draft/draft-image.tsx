import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ImageIcon } from "lucide-react";
import useDraftImage from "@/hooks/interface/dashboard/use-draft-image.interface";

export default function DraftImage() {
	const { Modal, set_content_hover_state, start } = useDraftImage();
	return (
		<>
			{Modal}
			<InteractiveIcon
				className='border grow flex place-content-center'
				onClick={start}
				onMouseLeave={() => set_content_hover_state(null)}
				onMouseEnter={() => set_content_hover_state("hover-image-icon")}
			>
				<ImageIcon />
			</InteractiveIcon>
		</>
	);
}
