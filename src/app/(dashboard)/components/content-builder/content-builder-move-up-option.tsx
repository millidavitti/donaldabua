import InteractiveIcon from "@/components/layouts/interactive_icon";
import { project_content_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useSetAtom } from "jotai";
import { ArrowUp } from "lucide-react";
import React from "react";

interface ContentBuilderMoveUpOption {
	position: number;
}
export default function ContentBuilderMoveUpOption({
	position,
}: ContentBuilderMoveUpOption) {
	const project_content_setter = useSetAtom(project_content_jotai);
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {
					project_content_setter((content) => {
						return content.map((component, i, arr) => {
							if (i === position - 1) {
								if (component.position + 1 >= arr.length) return component;
								return {
									...component,
									position: component.position + 1,
								};
							} else if (i === position) {
								if (component.position - 1 < 0) return component;
								return {
									...component,
									position: component.position - 1,
								};
							}
							return component;
						});
					});
				},
			}}
		>
			<ArrowUp />
		</InteractiveIcon>
	);
}
