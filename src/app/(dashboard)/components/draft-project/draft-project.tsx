import React, { ReactNode } from "react";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import DraftProjectTitle from "./draft-project-title";
import DraftProjectDescription from "./draft-project-description";
import DraftProjectTechnologies from "./draft-project-technologies";
import DraftProjectThumbnail from "./draft-project-thumbnail";
import { useDraftProject } from "@/hooks/interface/dashboard/use-draft-project.interface";

interface DraftProject {
	children: ReactNode;
}
export default function DraftProject({ children }: DraftProject) {
	const { edit_profile, previewDraft, close } = useDraftProject();
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full h-[570px] neonScan border-0'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<h2 className='text-2xl font-semibold'>
					{edit_profile === "edit-published-project"
						? "Update Project"
						: "Draft Project"}
				</h2>
				<InteractiveIcon
					htmlProps={{
						onClick() {
							close();
						},
					}}
				>
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
						<DraftProjectTitle />
						<DraftProjectDescription />
						<DraftProjectTechnologies />
						<DraftProjectThumbnail />
					</Flex>
					{children}
				</Flex>
				<Button onClick={previewDraft} className='bg-black text-light-surface'>
					Next
				</Button>
			</form>
		</Flex>
	);
}
