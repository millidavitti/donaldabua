import {
	defaultStore,
	profile_jotai,
	project_content_jotai,
	project_description_jotai,
	project_technologies_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	project_to_edit_jotai,
	projects_jotai,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { createId } from "@paralleldrive/cuid2";
import { useAtomValue, useSetAtom } from "jotai";
import { useResetProjectFormFields } from "../use-reset-project-form-fields";
import { createProjectController } from "@/backend/create-project.controller";
import { toast } from "sonner";
import { updateProjectController } from "@/backend/update-project.controller";

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
				project: {
					id: createId(),
					title: defaultStore.get(project_title_jotai),
					description: defaultStore.get(project_description_jotai),
					thumbnail: defaultStore.get(project_thumbnail_jotai),
				},
				content: project_content,
				technologies: project_technologies,
			});
			if (error) throw error;

			projects_setter((projects) => [...projects, project]);
		} catch (error) {
			console.log("---publishProject---\n", error);
			toast.error("An error occurred while publishing the project.");
		}

		resetProjectFormFields();
	}

	async function savePublishedProjectEdit() {
		// Update Project
		try {
			const { update, error } = await updateProjectController(
				project_to_edit!.id,
				{
					project: {
						id: createId(),
						title: defaultStore.get(project_title_jotai),
						description: defaultStore.get(project_description_jotai),
						thumbnail: defaultStore.get(project_thumbnail_jotai),
					},
					content: project_content,
					technologies: project_technologies,
				},
			);

			if (error) throw error;
			else
				projects_setter((projects) =>
					projects.map((project) => {
						if (project_to_edit!.id === project.id) return update;
						return project;
					}),
				);
		} catch (error) {
			projects_setter((projects) =>
				projects.map((project) => {
					if (project_to_edit!.id === project.id) return project_to_edit!;
					return project;
				}),
			);
			toast.error("Update failed. Please try again later");
		}

		resetProjectFormFields();
	}

	return {
		publishProject,
		savePublishedProjectEdit,
		editProfileState: edit_profile,
	};
}
