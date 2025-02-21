import Flex from "@/components/layouts/flex";
import React from "react";
import { useAtomValue } from "jotai";
import Overlay from "@/components/layouts/overlay";
import ViewProject from "../view-project";
import { projects_jotai, selected_project_jotai } from "@/data/atoms/app_data";
import PublishedProject from "./published-project";
import DraftProjectInfo from "../add-portfolio-project/draft-portfolio-project-info";
import ContentBuilder from "../content-builder/content-builder";
import PreviewProjectDraft from "../preview-project-draft/preview-project-draft";
import { project_form_step_jotai } from "@/data/atoms/ui_state";

export default function PublishedProjects() {
	const projects = useAtomValue(projects_jotai);
	const selected_project = useAtomValue(selected_project_jotai);
	const project_form_step = useAtomValue(project_form_step_jotai);
	return (
		<>
			<Flex className='flex-wrap gap-3 max-h-[484px]'>
				{projects.map((project) => {
					return <PublishedProject key={project.id} project={project} />;
				})}
			</Flex>
			<Overlay stateFlag='view-project' className='place-content-center'>
				<ViewProject project={selected_project!} />
			</Overlay>
			<Overlay
				stateFlag='edit-published-project'
				className='flex justify-center items-center'
			>
				{project_form_step === "draft-project-info" && (
					<DraftProjectInfo>
						<ContentBuilder />
					</DraftProjectInfo>
				)}
				{project_form_step === "preview-project-draft" && (
					<PreviewProjectDraft />
				)}
			</Overlay>
		</>
	);
}
