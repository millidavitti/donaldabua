import Flex from "@/components/layouts/flex";
import { ProjectMarkdown } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import md from "md";
import parse from "html-react-parser";
import ContentBuilderOptionsDrawer from "./content-builder-options-drawer";
import ContentBuilderEditOption from "./content-builder-edit-option";
import ContentBuilderDeleteOption from "./content-builder-delete-option";
import ContentBuilderMoveUpOption from "./content-builder-move-up-option";
import ContentBuilderMoveDownOption from "./content-builder-move-down-option";
import { useContentBuilderMarkdown } from "@/hooks/interface/dashboard/use-content-builder-markdown.interface";

interface ContentBuilderMarkdown {
	component: ProjectMarkdown;
}
export default function ContentBuilderMarkdown({
	component,
}: ContentBuilderMarkdown) {
	const { componentId, edit, save, captureInput } = useContentBuilderMarkdown();
	return (
		<Flex
			flex='column'
			className='gap-3 relative'
			htmlProps={{
				onKeyDown(e) {
					if (e.key === "Enter" && e.ctrlKey) {
						save(component.id);
					}
				},
			}}
		>
			<ContentBuilderOptionsDrawer>
				<ContentBuilderEditOption edit={() => edit(component.id)} />
				<ContentBuilderDeleteOption componentID={component.id} />
				<ContentBuilderMoveUpOption position={component.position} />
				<ContentBuilderMoveDownOption position={component.position} />
			</ContentBuilderOptionsDrawer>

			{componentId === component.id || parse(md(component.markdown))}
			{componentId === component.id && (
				<textarea
					defaultValue={component.markdown}
					className='shrink-0 p-3 neonScan'
					rows={30}
					onChange={(e) => {
						captureInput(e.target.value);
					}}
				/>
			)}
		</Flex>
	);
}
