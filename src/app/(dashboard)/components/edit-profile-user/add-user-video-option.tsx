import InteractiveIcon from "@/components/layouts/interactive_icon";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { CirclePlus } from "lucide-react";

export default function AddUserVideoOption() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);

	return (
		<InteractiveIcon
			callback={() => {
				edit_profile_setter("edit-video");
			}}
		>
			<CirclePlus size={24} />
		</InteractiveIcon>
	);
}
