import Flex from "@/components/layouts/flex";
import React, { useState } from "react";
import { component_to_edit_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import {
	project_content_jotai,
	ProjectMarkdown,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtom, useSetAtom } from "jotai";
import md from "md";
import parse from "html-react-parser";
import ContentBuilderOptionsDrawer from "./content-builder-options-drawer";
import ContentBuilderEditOption from "./content-builder-edit-option";
import ContentBuilderDeleteOption from "./content-builder-delete-option";
import ContentBuilderMoveUpOption from "./content-builder-move-up-option";
import ContentBuilderMoveDownOption from "./content-builder-move-down-option";

interface ContentBuilderText {
	component: ProjectMarkdown;
}
export default function ContentBuilderText({ component }: ContentBuilderText) {
	const [component_to_edit, component_to_edit_setter] = useAtom(
		component_to_edit_jotai,
	);
	const project_content_setter = useSetAtom(project_content_jotai);
	const [markdown, setMarkdown] = useState(component.markdown);
	return (
		<Flex
			flex='column'
			className='gap-3 relative'
			htmlProps={{
				onKeyDown(e) {
					if (e.key === "Enter" && e.ctrlKey) {
						component_to_edit_setter(null);
						project_content_setter((content) => {
							return content.map((obj) => {
								if (component.id === obj.id)
									return {
										...obj,
										markdown,
									};
								return obj;
							});
						});
					}
				},
			}}
		>
			<ContentBuilderOptionsDrawer>
				<ContentBuilderEditOption componentID={component.id} />
				<ContentBuilderDeleteOption componentID={component.id} />
				<ContentBuilderMoveUpOption position={component.position} />
				<ContentBuilderMoveDownOption position={component.position} />
			</ContentBuilderOptionsDrawer>

			{component_to_edit === component.id || parse(md(component.markdown))}
			{component_to_edit === component.id && (
				<textarea
					value={markdown}
					className='shrink-0 p-3 neonScan'
					rows={30}
					onChange={(e) => {
						setMarkdown(e.target.value);
					}}
				/>
			)}
		</Flex>
	);
}
