import InteractiveIcon from "@/components/layouts/interactive_icon";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useSetAtom } from "jotai";
import { CirclePlus } from "lucide-react";

export default function AddUserVideoOption() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);

	return (
		<InteractiveIcon
			callback={() => {
				dashboard_view_setter("edit-video");
			}}
		>
			<CirclePlus size={24} />
		</InteractiveIcon>
	);
}
