import React, { ReactNode } from "react";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import AddPortfolioProjectTitle from "./add-portfolio-project-title";
import AddPortfolioProjectDescription from "./add-portfolio-project-description";
import AddPortfolioProjectTechStack from "./add-portfolio-project-tech-stack";
import AddPortfolioProjectThumbnail from "./add-portfolio-project-thumbnail";
import useDraftPortfolioProjectInfoInterface from "@/hooks/interface/use-draft-portfolio-project-info-interface";

interface DraftPortfolioProjectInfo {
	children: ReactNode;
}
export default function DraftPortfolioProjectInfo({
	children,
}: DraftPortfolioProjectInfo) {
	const { edit_profile, closePortfolioProjectForm, gotToPreview } =
		useDraftPortfolioProjectInfoInterface();
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[90%] neonScan'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<h2 className='text-2xl font-semibold'>
					{edit_profile === "edit-published-portfolio-project"
						? "Edit Published Project"
						: "Add New Project"}
				</h2>
				<InteractiveIcon
					htmlProps={{
						onClick() {
							closePortfolioProjectForm();
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
					closePortfolioProjectForm();
				}}
			>
				<AddPortfolioProjectTitle />
				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px] h-fit'>
						<AddPortfolioProjectDescription />
						<AddPortfolioProjectTechStack />
						<AddPortfolioProjectThumbnail />
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
