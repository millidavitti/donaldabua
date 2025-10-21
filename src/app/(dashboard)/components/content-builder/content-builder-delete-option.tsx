import InteractiveIcon from "@/components/layouts/interactive_icon";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useSetAtom } from "jotai";
import { Trash } from "lucide-react";
import React from "react";

interface ContentBuilderDeleteOption {
	componentID: string;
}
export default function ContentBuilderDeleteOption({
	componentID,
}: ContentBuilderDeleteOption) {
	const project_content_setter = useSetAtom(input_project_content_atom);
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			onClick={() => {
				project_content_setter((content) => {
					return content
						.filter((obj) => componentID !== obj.id)
						.map((obj, i) => {
							return { ...obj, position: i };
						});
				});
			}}
		>
			<Trash />
		</InteractiveIcon>
	);
}
