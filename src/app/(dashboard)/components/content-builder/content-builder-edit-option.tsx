import InteractiveIcon from "@/components/layouts/interactive_icon";
import { component_to_edit_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom } from "jotai";
import { Edit } from "lucide-react";
import React from "react";

interface ContentBuilderEditOption {
	componentID: string;
}
export default function ContentBuilderEditOption({
	componentID,
}: ContentBuilderEditOption) {
	const [component_to_edit, component_to_edit_setter] = useAtom(
		component_to_edit_jotai,
	);
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {
					if (component_to_edit === componentID) component_to_edit_setter(null);
					else component_to_edit_setter(componentID);
				},
			}}
		>
			<Edit />
		</InteractiveIcon>
	);
}
