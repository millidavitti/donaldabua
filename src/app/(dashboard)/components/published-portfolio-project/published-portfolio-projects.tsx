import Flex from "@/components/layouts/flex";
import React from "react";
import { mock_portfolio_projects_jotai } from "@/data/mock";
import { useAtom, useAtomValue } from "jotai";
import Overlay from "@/components/layouts/overlay";
import ViewPortfolioProject from "../view-portfolio-project";
import { selected_portfolio_project_jotai } from "@/data/atoms/app_data";
import PublishedPortfolioProject from "./published-portfolio-project";
import DraftPortfolioProjectInfo from "../add-portfolio-project/draft-portfolio-project-info";
import ContentBuilder from "../content-builder/content-builder";
import PreviewPortfolioProjectDraft from "../preview-portfolio-project-draft/preview-portfolio-project-draft";
import { portfolio_project_form_step_jotai } from "@/data/atoms/ui_state";

export default function PublishedPortfolioProjects() {
	const mock_portfolio_projects = useAtomValue(mock_portfolio_projects_jotai);
	const selected_portfolio_project = useAtomValue(
		selected_portfolio_project_jotai,
	);
	const portfolio_project_form_step = useAtomValue(
		portfolio_project_form_step_jotai,
	);
	return (
		<>
			<Flex className='flex-wrap gap-3 max-h-[484px]'>
				{mock_portfolio_projects.map((project) => {
					return (
						<PublishedPortfolioProject key={project.id} project={project} />
					);
				})}
			</Flex>
			<Overlay
				stateFlag='view-portfolio-project'
				className='place-content-center'
			>
				<ViewPortfolioProject project={selected_portfolio_project!} />
			</Overlay>
			<Overlay
				stateFlag='edit-published-portfolio-project'
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
