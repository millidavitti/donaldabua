import {
	defaultStore,
	profile_jotai,
	project_content_jotai,
	project_description_jotai,
	project_technologies_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	projects_jotai,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	project_to_edit_jotai,
} from "@/data/atoms/ui_state";
import { createId } from "@paralleldrive/cuid2";
import { useAtomValue, useSetAtom } from "jotai";
import { useResetProjectFormFields } from "../use-reset-project-form-fields";
import { createProjectController } from "@/backend/create-project.controller";
import { createProjectContentController } from "@/backend/create-project-content.controller";
import { createProjectTechnologiesController } from "@/backend/create-project-technologies.controller";
import { toast } from "sonner";

export function usePublishProjectInterface() {
	const projects_setter = useSetAtom(projects_jotai);
	const project_to_edit = useAtomValue(project_to_edit_jotai);
	const edit_profile = useAtomValue(edit_profile_jotai);
	const { id: profileId } = useAtomValue(profile_jotai);
	const project_content = useAtomValue(project_content_jotai);
	const project_technologies = useAtomValue(project_technologies_jotai);
	const resetProjectFormFields = useResetProjectFormFields();

	async function publishProject() {
		try {
			// Create Project
			const { project, error } = await createProjectController(profileId, {
				id: createId(),
				title: defaultStore.get(project_title_jotai),
				description: defaultStore.get(project_description_jotai),
				thumbnail: defaultStore.get(project_thumbnail_jotai),
			});
			if (error) throw error;
			// Create Project Content

			const { error: error2 } = await createProjectContentController(
				project.id,
				project_content,
			);
			if (error2) throw error2;
			// Create Project Technologies
			const { error: error3 } = await createProjectTechnologiesController(
				project_technologies.map((technology) => ({
					projectId: project.id,
					technologyId: technology.id,
				})),
			);
			if (error3) throw error3;

			projects_setter((projects) => [...projects, project]);
		} catch (error) {
			console.log("---publishProject---\n", error);
			toast.error("An error occurred while publishing the project.");
		}

		resetProjectFormFields();
	}

	function savePublishedProjectEdit() {
		projects_setter((projects) =>
			projects.map((project) => {
				if (project_to_edit! === project.id)
					return {
						id: createId(),
						description: defaultStore.get(project_description_jotai),
						thumbnail: defaultStore.get(project_thumbnail_jotai),
						title: defaultStore.get(project_title_jotai),
					};
				return project;
			}),
		);
		resetProjectFormFields();
	}

	return {
		publishProject,
		savePublishedProjectEdit,
		editProfileState: edit_profile,
	};
}
