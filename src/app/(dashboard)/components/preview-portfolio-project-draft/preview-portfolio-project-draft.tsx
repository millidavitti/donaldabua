import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import PreviewPortfolioProjectTitle from "./preview-portfolio-project-title-draft";
import PreviewPortfolioProjectDescription from "./preview-portfolio-project-description-draft";
import PreviewPortfolioProjectTechStack from "./preview-portfolio-project-tech-stack-draft";
import PreviewPortfolioProjectThumbnail from "./preview-portfolio-project-thumbnail-draft";
import PreviewPortfolioProjectContent from "./preview-portfolio-project-content-draft";
import PublishPortfolioProject from "./publish-portfolio-project-draft";
import usePreviewPortfolioProjectDraftInterface from "@/hooks/interface/use-preview-portfolio-project-draft-interface";

export default function PreviewPortfolioProjectDraft() {
	const { goBack } = usePreviewPortfolioProjectDraftInterface();

	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[95%] neonScan'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<InteractiveIcon callback={() => goBack()}>
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
