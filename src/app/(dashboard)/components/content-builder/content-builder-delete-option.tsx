import InteractiveIcon from "@/components/layouts/interactive_icon";
import { project_content_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useSetAtom } from "jotai";
import { Trash } from "lucide-react";
import React from "react";

interface ContentBuilderDeleteOption {
	componentID: string;
}
export default function ContentBuilderDeleteOption({
	componentID,
}: ContentBuilderDeleteOption) {
	const project_content_setter = useSetAtom(project_content_jotai);
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {
					project_content_setter((content) => {
						return content
							.filter((obj) => componentID !== obj.id)
							.map((obj, i) => {
								return { ...obj, position: i };
							});
					});
				},
			}}
		>
			<Trash />
		</InteractiveIcon>
	);
}
