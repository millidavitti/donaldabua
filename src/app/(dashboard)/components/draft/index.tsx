import React, { ReactNode } from "react";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import DraftTitle from "./draft-title";
import DraftDescription from "./draft-description";
import DraftTechnologies from "./draft-technologies";
import DraftThumbnail from "./draft-thumbnail";
import { useDraft } from "@/app/(dashboard)/components/draft/interfaces/use-draft.interface";
import DraftRepository from "./draft-repository";
import DraftDeployment from "./draft-deployment";

interface DraftProject {
	children: ReactNode;
}
export default function Draft({ children }: DraftProject) {
	const { context, previewDraft, close } = useDraft();
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full h-[570px] neonScan border-0'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<h2 className='text-2xl font-semibold'>
					{context === "update-project" ? "Update Project" : "Draft Project"}
				</h2>
				<InteractiveIcon onClick={close}>
					<X size={24} className='stroke-light-error' />
				</InteractiveIcon>
			</Flex>
			<form
				className='flex flex-col gap-3'
				onSubmit={(e) => {
					e.preventDefault();
					close();
				}}
			>
				<Flex className='gap-3 flex-wrap border-0 p-0'>
					<Flex flex='column' className='grow gap-3 basis-[360px] h-full'>
						<DraftTitle />
						<DraftDescription />
						<DraftTechnologies />
						<DraftThumbnail />
						<DraftRepository />
						<DraftDeployment />
					</Flex>
					{children}
				</Flex>
				<Button
					type='button'
					onClick={previewDraft}
					className='bg-black text-light-surface'
				>
					Next
				</Button>
			</form>
		</Flex>
	);
}
