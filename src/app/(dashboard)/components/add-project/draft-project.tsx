import React, { ReactNode } from "react";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import AddProjectTitle from "./add-project-title";
import AddProjectDescription from "./add-project-description";
import AddProjectTechStack from "./add-project-tech-stack";
import AddProjectThumbnail from "./add-project-thumbnail";
import useDraftProjectInfoInterface from "@/hooks/interface/use-draft-portfolio-project-info-interface";

interface DraftProjectInfo {
	children: ReactNode;
}
export default function DraftProject({ children }: DraftProjectInfo) {
	const { edit_profile, closeProjectForm, gotToPreview } =
		useDraftProjectInfoInterface();
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[90%] neonScan'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<h2 className='text-2xl font-semibold'>
					{edit_profile === "edit-published-project"
						? "Edit Published Project"
						: "Add New Project"}
				</h2>
				<InteractiveIcon
					htmlProps={{
						onClick() {
							closeProjectForm();
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
					closeProjectForm();
				}}
			>
				<AddProjectTitle />
				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px] h-fit'>
						<AddProjectDescription />
						<AddProjectTechStack />
						<AddProjectThumbnail />
					</Flex>
					{children}
				</Flex>
				<Button
					onClick={() => {
						gotToPreview();
					}}
					className='bg-black text-light-surface'
				>
					Next
				</Button>
			</form>
		</Flex>
	);
}
