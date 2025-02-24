import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import PreviewProjectTitle from "./preview-project-title-draft";
import PreviewProjectDescription from "./preview-project-description-draft";
import PreviewProjectTechnologies from "./preview-project-tech-stack-draft";
import PreviewProjectThumbnail from "./preview-project-thumbnail-draft";
import PreviewProjectContent from "./preview-project-content-draft";
import PublishProject from "./publish-project-draft";
import { usePreviewProjectDraftInterface } from "@/hooks/interface/use-preview-project-draft-interface";

export default function PreviewProjectDraft() {
	const { goBack } = usePreviewProjectDraftInterface();

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
				<PreviewProjectTitle />

				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px]'>
						<PreviewProjectDescription />
						<PreviewProjectTechnologies />
						<PreviewProjectThumbnail />
					</Flex>
					<PreviewProjectContent />
				</Flex>
				<PublishProject />
			</Flex>
		</Flex>
	);
}
