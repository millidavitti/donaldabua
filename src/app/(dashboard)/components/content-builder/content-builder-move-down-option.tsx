import InteractiveIcon from "@/components/layouts/interactive_icon";
import { project_content_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useSetAtom } from "jotai";
import { ArrowDown } from "lucide-react";
import React from "react";

interface ContentBuilderMoveDownOption {
	position: number;
}
export default function ContentBuilderMoveDownOption({
	position,
}: ContentBuilderMoveDownOption) {
	const project_content_setter = useSetAtom(project_content_jotai);
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {
					project_content_setter((content) => {
						return content.map((comp, i, arr) => {
							if (i === position) {
								if (comp.position + 1 >= arr.length) return comp;
								return {
									...comp,
									position: comp.position + 1,
								};
							} else if (i === position + 1) {
								if (comp.position - 1 < 0) return comp;
								return {
									...comp,
									position: comp.position - 1,
								};
							}
							return comp;
						});
					});
				},
			}}
		>
			<ArrowDown />
		</InteractiveIcon>
	);
}
