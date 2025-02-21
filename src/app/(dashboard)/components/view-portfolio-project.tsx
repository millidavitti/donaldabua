import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import PublishedProjectTitle from "./published-portfolio-project/published-portfolio-project-title";
import PublishedProjectDescription from "./published-portfolio-project/published-portfolio-project-description";
import PublishedProjectTechStack from "./published-portfolio-project/published-portfolio-project-tech-stack";
import PublishedProjectThumbnail from "./published-portfolio-project/published-portfolio-project-thumbnail";
import PublishedProjectContent from "./published-portfolio-project/published-portfolio-project-content";
import { Project } from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";
import { edit_profile_jotai } from "@/data/atoms/ui_state";

interface ViewPortfolioProject {
	project: Project;
}
export default function ViewProject({ project }: ViewPortfolioProject) {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);

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
						<PublishedProjectTechStack techStack={project.techStack} />
						<PublishedProjectThumbnail thumbnail={project.thumbnail} />
					</Flex>
					<PublishedProjectContent />
				</Flex>
			</Flex>
		</Flex>
	);
}
