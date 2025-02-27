import {
	defaultStore,
	profile_snapshot_jotai,
	project_content_jotai,
	project_description_jotai,
	project_technologies_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	project_snapshot_jotai,
	projects_snapshot_jotai,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { createId } from "@paralleldrive/cuid2";
import { useAtomValue, useSetAtom } from "jotai";
import { useResetProjectFormFields } from "../use-reset-project-form-fields";
import { createProjectController } from "@/backend/create-project.controller";
import { toast } from "sonner";
import { updateProjectController } from "@/backend/update-project.controller";

export function usePublishProjectInterface() {
	const projects_snapshot_setter = useSetAtom(projects_snapshot_jotai);
	const project_snapshot = useAtomValue(project_snapshot_jotai);
	const edit_profile = useAtomValue(edit_profile_jotai);
	const profile_snapshot = useAtomValue(profile_snapshot_jotai);
	const project_content = useAtomValue(project_content_jotai);
	const project_technologies = useAtomValue(project_technologies_jotai);
	const resetProjectFormFields = useResetProjectFormFields();

	async function publishProject() {
		try {
			// Create Project
			const { project, error } = await createProjectController(
				profile_snapshot.id,
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

			projects_snapshot_setter((projects) => [...projects, project]);
			resetProjectFormFields();
		} catch (error) {
			console.log("---publishProject---\n", error);
			toast.error("An error occurred while publishing the project.");
		}
	}

	async function savePublishedProjectEdit() {
		// Update Project
		try {
			const { update, error } = await updateProjectController(
				project_snapshot!.id,
				{
					project: {
						id: project_snapshot!.id,
						title: defaultStore.get(project_title_jotai),
						description: defaultStore.get(project_description_jotai),
						thumbnail: defaultStore.get(project_thumbnail_jotai),
					},
					content: project_content,
					technologies: project_technologies,
				},
			);

			if (error) throw error;

			projects_snapshot_setter((projects) =>
				projects.map((project) => {
					if (project_snapshot!.id === project.id) return update;
					return project;
				}),
			);
			resetProjectFormFields();
		} catch (error) {
			projects_snapshot_setter((projects) =>
				projects.map((project) => {
					if (project_snapshot!.id === project.id) return project_snapshot!;
					return project;
				}),
			);
			toast.error("Update failed. Please try again later");
			console.log("---savePublishedProjectEdit---\n", error);
		}
	}

	return {
		publishProject,
		savePublishedProjectEdit,
		editProfileState: edit_profile,
	};
}
