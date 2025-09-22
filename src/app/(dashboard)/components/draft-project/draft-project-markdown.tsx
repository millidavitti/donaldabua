import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Text } from "lucide-react";
import useDraftProjectMarkdown from "@/hooks/interface/dashboard/use-draft-project-markdown.interface";

export default function DraftProjectMarkdown() {
	const { Modal, set_content_hover_state, start } = useDraftProjectMarkdown();
	return (
		<>
			{Modal}
			<InteractiveIcon
				className='border grow flex place-content-center'
				htmlProps={{
					onMouseEnter() {
						set_content_hover_state("hover-text-icon");
					},
					onMouseLeave() {
						set_content_hover_state(null);
					},
					onClick() {
						start();
					},
				}}
			>
				<Text />
			</InteractiveIcon>
		</>
	);
}
