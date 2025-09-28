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
import { usePreviewProjectDraft } from "@/hooks/interface/dashboard/use-preview-project-draft.interface";

export default function PreviewProjectDraft() {
	const { draftProject } = usePreviewProjectDraft();

	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[95%] neonScan border-0'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0 border-0 p-0'>
				<InteractiveIcon callback={draftProject}>
					<ArrowLeftIcon size={24} />
				</InteractiveIcon>
			</Flex>

			<Flex flex='column' className='gap-3 border-0 p-0'>
				{/* Project Title */}
				<PreviewProjectTitle />

				<Flex className='gap-3 flex-wrap border-0 p-0'>
					<Flex flex='column' className='grow gap-3 basis-[360px] self-start'>
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
