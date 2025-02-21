"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import {
	edit_profile_jotai,
	project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { CirclePlus } from "lucide-react";
import DraftProjectInfo from "../add-portfolio-project/draft-portfolio-project-info";
import PreviewProjectDraft from "../preview-project-draft/preview-project-draft";
import ContentBuilder from "../content-builder/content-builder";
import PublishedProjects from "../published-project/published-projects";
import useResetProjectFormFields from "@/hooks/use-reset-portfolio-project-form-fields";

export default function EditProjects() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [project_form_step, project_form_step_setter] = useAtom(
		project_form_step_jotai,
	);
	const resetProjectFormFields = useResetProjectFormFields();
	return (
		<>
			<Flex flex='column' className='gap-3'>
				{/* Header */}
				<Flex className='items-center justify-between shrink-0'>
					<p className='font-semibold lg:text-2xl'>Portfolio</p>
					<InteractiveIcon
						callback={() => {
							resetProjectFormFields();
							edit_profile_setter("edit-portfolio");
							project_form_step_setter("draft-project-info");
						}}
					>
						<CirclePlus size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Projects */}
				<PublishedProjects />
			</Flex>
			<Overlay
				stateFlag='edit-portfolio'
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
