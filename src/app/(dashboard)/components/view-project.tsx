import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import PublishedProjectTitle from "./published-project/published-project-title";
import PublishedProjectDescription from "./published-project/published-project-description";
import PublishedProjectTechnologies from "./published-project/published-project-tech-stack";
import PublishedProjectThumbnail from "./published-project/published-project-thumbnail";
import PublishedProjectContent from "./published-project/published-project-content";
import { Project } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useResetProjectFormFields } from "@/hooks/use-reset-project-form-fields";

interface ViewPortfolioProject {
	project: Project;
}
export default function ViewProject({ project }: ViewPortfolioProject) {
	const resetProjectFormFields = useResetProjectFormFields();
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[95%] neonScan border-0'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0 border-0 p-0'>
				<InteractiveIcon
					htmlProps={{
						onClick() {
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

				<Flex className='gap-3 flex-wrap border-0 p-0'>
					<Flex flex='column' className='grow gap-3 basis-[360px]'>
						<PublishedProjectDescription description={project.description} />
						<PublishedProjectTechnologies />
						<PublishedProjectThumbnail thumbnail={project.thumbnail} />
					</Flex>
					<PublishedProjectContent />
				</Flex>
			</Flex>
		</Flex>
	);
}
