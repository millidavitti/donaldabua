"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { CirclePlus } from "lucide-react";
import DraftPortfolioProjectInfo from "../add-portfolio-project/draft-portfolio-project-info";
import PreviewPortfolioProjectDraft from "../preview-portfolio-project-draft/preview-portfolio-project-draft";
import ContentBuilder from "../content-builder/content-builder";
import PortfolioProjects from "../portfolio-projects";

export default function EditProfilePortfolio() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [portfolio_project_form_step, portfolio_project_form_step_setter] =
		useAtom(portfolio_project_form_step_jotai);

	return (
		<>
			<Flex flex='column' className='gap-3'>
				{/* Header */}
				<Flex className='items-center justify-between shrink-0'>
					<p className='font-semibold lg:text-2xl'>Portfolio</p>
					<InteractiveIcon
						callback={() => {
							edit_profile_setter("edit-portfolio");
							portfolio_project_form_step_setter("draft-project-info");
						}}
					>
						<CirclePlus size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Projects */}
				<PortfolioProjects />
			</Flex>
			<Overlay
				stateFlag='edit-portfolio'
				className='flex justify-center items-center'
			>
				{portfolio_project_form_step === "draft-project-info" && (
					<DraftPortfolioProjectInfo>
						<ContentBuilder />
					</DraftPortfolioProjectInfo>
				)}
				{portfolio_project_form_step === "preview-project-draft" && (
					<PreviewPortfolioProjectDraft />
				)}
			</Overlay>
		</>
	);
}
