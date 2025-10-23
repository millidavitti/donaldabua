import Flex from "@/components/layouts/flex";
import { ProjectContent } from "@/data/dashboard/dashboard-atoms/types";
import md from "md";
import parse from "html-react-parser";
import ContentBuilderOptionsDrawer from "./content-builder-options-drawer";
import ContentBuilderEditOption from "./content-builder-edit-option";
import ContentBuilderDeleteOption from "./content-builder-delete-option";
import ContentBuilderMoveUpOption from "./content-builder-move-up-option";
import ContentBuilderMoveDownOption from "./content-builder-move-down-option";
import { useContentBuilderMarkdown } from "@/app/(dashboard)/components/content-builder/interfaces/use-content-builder-markdown.interface";

interface ContentBuilderMarkdown {
	component: ProjectContent;
}
export default function ContentBuilderMarkdown({
	component,
}: ContentBuilderMarkdown) {
	const { edit, Modal } = useContentBuilderMarkdown();
	return (
		<Flex flex='column' className='gap-3 relative'>
			<ContentBuilderOptionsDrawer>
				<ContentBuilderEditOption
					edit={() => edit(component.id, component.markdown!)}
				/>
				<ContentBuilderDeleteOption componentID={component.id} />
				<ContentBuilderMoveUpOption position={component.position} />
				<ContentBuilderMoveDownOption position={component.position} />
			</ContentBuilderOptionsDrawer>

			{parse(md(component.markdown))}
			{Modal}
		</Flex>
	);
}
