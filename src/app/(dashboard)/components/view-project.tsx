import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import PublishedProjectTitle from "./published-project/published-project-title";
import PublishedProjectDescription from "./published-project/published-project-description";
import PublishedProjectTechStack from "./published-project/published-project-tech-stack";
import PublishedProjectThumbnail from "./published-project/published-project-thumbnail";
import PublishedProjectContent from "./published-project/published-project-content";
import { Project } from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useResetProjectFormFields } from "@/hooks/use-reset-project-form-fields";

interface ViewPortfolioProject {
	project: Project;
}
export default function ViewProject({ project }: ViewPortfolioProject) {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const resetProjectFormFields = useResetProjectFormFields();
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[95%] neonScan'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<InteractiveIcon
					htmlProps={{
						onClick() {
							edit_profile_setter(null);
							resetProjectFormFields();
						},
					}}
				>
					<ArrowLeftIcon size={24} />
				</InteractiveIcon>
			</Flex>

			<Flex flex='column' className='gap-3'>
				{/* Project Title */}
				<PublishedProjectTitle title={project.title} />

				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px]'>
						<PublishedProjectDescription description={project.description} />
						<PublishedProjectTechStack />
						<PublishedProjectThumbnail thumbnail={project.thumbnail} />
					</Flex>
					<PublishedProjectContent />
				</Flex>
			</Flex>
		</Flex>
	);
}
