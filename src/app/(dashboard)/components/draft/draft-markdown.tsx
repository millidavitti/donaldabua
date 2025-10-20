import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Text } from "lucide-react";
import useDraftMarkdown from "@/hooks/interface/dashboard/use-draft-markdown.interface";

export default function DraftMarkdown() {
	const { Modal, set_content_hover_state, start } = useDraftMarkdown();
	return (
		<>
			{Modal}
			<InteractiveIcon
				className='border grow flex place-content-center'
				onClick={start}
				onMouseLeave={() => set_content_hover_state(null)}
				onMouseEnter={() => set_content_hover_state("hover-image-icon")}
			>
				<Text />
			</InteractiveIcon>
		</>
	);
}
