import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import DraftPreviewTitle from "./draft-preview-title";
import DraftPreviewDescription from "./draft-preview-description";
import DraftPreviewTechnologies from "./draft-preview-technologies";
import DraftPreviewThumbnail from "./draft-preview-thumbnail";
import DraftPreviewContent from "./draft-preview-content";
import PublishDraft from "./publish-draft";
import { useDraftPreview } from "@/app/(dashboard)/components/draft-preview/interfaces/use-draft-preview.interface";
import DraftPreviewRepository from "./draft-preview-repository";
import DraftPreviewDeployment from "./draft-preview-deployment";

export default function DraftPreview() {
	const { draftProject } = useDraftPreview();

	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[95%] neonScan border-0'
		>
			{/* Header */}
			<Flex className='items-center justify-between p-0 border-0 shrink-0'>
				<InteractiveIcon callback={draftProject}>
					<ArrowLeftIcon size={24} />
				</InteractiveIcon>
			</Flex>

			<Flex flex='column' className='gap-3 p-0 border-0'>
				{/* Project Title */}
				<DraftPreviewTitle />

				<Flex className='flex-wrap gap-3 p-0 border-0'>
					<Flex flex='column' className='grow gap-3 basis-[360px] self-start'>
						<DraftPreviewDescription />
						<DraftPreviewTechnologies />
						<DraftPreviewThumbnail />
						<DraftPreviewRepository />
						<DraftPreviewDeployment />
					</Flex>
					<DraftPreviewContent />
				</Flex>
				<PublishDraft />
			</Flex>
		</Flex>
	);
}
