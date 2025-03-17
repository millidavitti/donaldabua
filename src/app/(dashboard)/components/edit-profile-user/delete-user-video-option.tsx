import InteractiveIcon from "@/components/layouts/interactive_icon";
import { useDeleteUserVideoOptionInterface } from "@/hooks/interface/dashboard-interface/use-delete-user-video-option-interface";
import { Trash2 } from "lucide-react";

export default function DeleteUserVideoOption() {
	const { deleteVideo } = useDeleteUserVideoOptionInterface();

	return (
		<InteractiveIcon
			callback={() => {
				deleteVideo();
			}}
		>
			<Trash2 size={24} />
		</InteractiveIcon>
	);
}
