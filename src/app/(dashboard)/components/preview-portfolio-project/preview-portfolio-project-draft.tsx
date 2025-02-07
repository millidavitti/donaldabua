import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { portfolio_project_form_step_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import PreviewPortfolioProjectTitle from "./preview-portfolio-project-title";
import PreviewPortfolioProjectDescription from "./preview-portfolio-project-description";
import PreviewPortfolioProjectTechStack from "./preview-portfolio-project-tech-stack";
import PreviewPortfolioProjectThumbnail from "./preview-portfolio-project-thumbnail";
import PreviewPortfolioProjectContent from "./preview-portfolio-project-content";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import PublishPortfolioProject from "./publish-portfolio-project";

export default function PreviewPortfolioProjectDraft() {
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);
	const [] = useAtom(portfolio_project_data_jotai);
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[95%] neonScan'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<InteractiveIcon
					callback={() =>
						portfolio_project_form_step_setter("draft-project-info")
					}
				>
					<ArrowLeftIcon size={24} />
				</InteractiveIcon>
			</Flex>

			<Flex flex='column' className='gap-3'>
				{/* Project Title */}
				<PreviewPortfolioProjectTitle />

				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px]'>
						<PreviewPortfolioProjectDescription />
						<PreviewPortfolioProjectTechStack />
						<PreviewPortfolioProjectThumbnail />
					</Flex>
					<PreviewPortfolioProjectContent />
				</Flex>
				<PublishPortfolioProject />
			</Flex>
		</Flex>
	);
}
