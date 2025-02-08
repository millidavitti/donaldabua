import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import PublishedPortfolioProjectTitle from "./published-portfolio-project/published-portfolio-project-title";
import PublishedPortfolioProjectDescription from "./published-portfolio-project/published-portfolio-project-description";
import PublishedPortfolioProjectTechStack from "./published-portfolio-project/published-portfolio-project-tech-stack";
import PublishedPortfolioProjectThumbnail from "./published-portfolio-project/published-portfolio-project-thumbnail";
import PublishedPortfolioProjectContent from "./published-portfolio-project/published-portfolio-project-content";
import {
	PortfolioProjectData,
	
} from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";
import { edit_profile_jotai } from "@/data/atoms/ui_state";

interface ViewPortfolioProject {
	project: PortfolioProjectData;
}
export default function ViewPortfolioProject({
	project,
}: ViewPortfolioProject) {
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
				<PublishedPortfolioProjectTitle title={project.title} />

				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px]'>
						<PublishedPortfolioProjectDescription
							description={project.description}
						/>
						<PublishedPortfolioProjectTechStack techStack={project.techStack} />
						<PublishedPortfolioProjectThumbnail thumbnail={project.thumbnail} />
					</Flex>
					<PublishedPortfolioProjectContent content={project.content} />
				</Flex>
			</Flex>
		</Flex>
	);
}
