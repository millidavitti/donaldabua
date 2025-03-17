"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import { CirclePlus } from "lucide-react";
import DraftProject from "../draft-project/draft-project";
import PreviewProjectDraft from "../preview-project-draft/preview-project-draft";
import ContentBuilder from "../content-builder/content-builder";
import PublishedProjects from "../published-project/published-projects";
import { useEditProfileProjectsInterface } from "@/hooks/interface/dashboard/use-edit-profile-projects-interface";

export default function EditProfileProjects() {
	const { addNewProject, project_form_step } =
		useEditProfileProjectsInterface();

	return (
		<>
			<Flex flex='column' className='gap-3' htmlProps={{ id: "projects" }}>
				<a href='#projects'>
					{/* Header */}
					<Flex className='items-center justify-between shrink-0'>
						<p className='font-semibold lg:text-2xl'>Projects</p>
						<InteractiveIcon
							callback={() => {
								addNewProject();
							}}
						>
							<CirclePlus size={24} />
						</InteractiveIcon>
					</Flex>{" "}
				</a>
				{/* Projects */}
				<PublishedProjects />
			</Flex>

			<Overlay
				stateFlag='edit-portfolio'
				className='flex justify-center items-center'
			>
				{project_form_step === "draft-project-info" && (
					<DraftProject>
						<ContentBuilder />
					</DraftProject>
				)}
				{project_form_step === "preview-project-draft" && (
					<PreviewProjectDraft />
				)}
			</Overlay>
		</>
	);
}
