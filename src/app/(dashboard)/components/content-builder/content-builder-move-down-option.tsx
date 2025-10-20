import InteractiveIcon from "@/components/layouts/interactive_icon";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useSetAtom } from "jotai";
import { ArrowDown } from "lucide-react";
import React from "react";

interface ContentBuilderMoveDownOption {
	position: number;
}
export default function ContentBuilderMoveDownOption({
	position,
}: ContentBuilderMoveDownOption) {
	const set_project_content = useSetAtom(input_project_content_atom);
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			onClick={() =>
				set_project_content((content) => {
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
				})
			}
		>
			<ArrowDown />
		</InteractiveIcon>
	);
}
