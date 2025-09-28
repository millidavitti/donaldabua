import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Edit } from "lucide-react";

interface ContentBuilderEditOption {
	edit: () => void;
}
export default function ContentBuilderEditOption({
	edit,
}: ContentBuilderEditOption) {
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {
					edit();
				},
			}}
		>
			<Edit />
		</InteractiveIcon>
	);
}
