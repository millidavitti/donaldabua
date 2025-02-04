import Flex from "@/components/layouts/flex";
import React from "react";
import ContentBuilderOptions from "./content-builder-options";
import { component_to_edit_jotai } from "@/data/atoms/ui_state";
import {
	portfolio_project_data_jotai,
	PortfolioProjectText,
} from "@/data/atoms/app_data";
import { useAtom, useSetAtom } from "jotai";
import md from "md";
import parse from "html-react-parser";

interface ContentBuilderText {
	component: PortfolioProjectText;
}
export default function ContentBuilderText({ component }: ContentBuilderText) {
	const [component_to_edit, component_to_edit_setter] = useAtom(
		component_to_edit_jotai,
	);
	const portfolio_project_data_setter = useSetAtom(
		portfolio_project_data_jotai,
	);
	return (
		<Flex
			flex='column'
			className='gap-3'
			htmlProps={{
				onKeyDown(e) {
					if (e.key === "Enter" && e.ctrlKey) component_to_edit_setter(null);
				},
			}}
		>
			<ContentBuilderOptions
				componentID={component.id}
				edit={() =>
					component_to_edit === component.id
						? component_to_edit_setter(null)
						: component_to_edit_setter(component.id)
				}
			/>

			{component_to_edit === component.id || parse(md(component.markdown))}
			{component_to_edit === component.id && (
				<textarea
					value={component.markdown}
					className='shrink-0 p-3 '
					rows={30}
					onChange={(e) => {
						portfolio_project_data_setter((data) => {
							const update = data.content.map((obj) => {
								if (component.id === obj.id)
									return {
										...obj,
										markdown: e.target.value,
									};
								return obj;
							});
							return {
								...data,
								content: update,
							};
						});
					}}
				/>
			)}
		</Flex>
	);
}
