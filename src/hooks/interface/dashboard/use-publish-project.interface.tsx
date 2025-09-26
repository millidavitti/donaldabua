import {
	defaultStore,
	project_description_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	project_snapshot_jotai,
	projects_snapshot_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { api_task_atom } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useResetProjectDraft } from "../../use-reset-project-draft";
import { toast } from "sonner";
import { updateProjectController } from "@/backend/controllers/dashboard/project/update-project.controller";
import {
	create_project_atom,
	input_project_atom,
	input_project_technologies_atom,
	input_project_content_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useEditProjects } from "./use-edit-projects.interface";

export function usePublishProject() {
	const projects_snapshot_setter = useSetAtom(projects_snapshot_jotai);
	const project_snapshot = useAtomValue(project_snapshot_jotai);
	const input_project_content = useAtomValue(input_project_content_atom);
	const input_project_technologies = useAtomValue(
		input_project_technologies_atom,
	);
	const [, api_task_setter] = useAtom(api_task_atom);
	const resetProjectDraft = useResetProjectDraft();
	const [create_project] = useAtom(create_project_atom);
	const input_project = useAtomValue(input_project_atom);
	const set_context = useSetAtom(useEditProjects.context_atom);
	const close = () => {
		set_context(null);
		resetProjectDraft();
	};
	const publish = async () => {
		await create_project.mutateAsync({
			content: input_project_content,
			project: input_project,
			technologies: input_project_technologies,
		});
		close();
	};

	async function savePublishedProjectEdit() {
		api_task_setter("save-published-project-edit");
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
					content: input_project_content,
					technologies: input_project_technologies,
				},
			);

			if (error) throw error;

			projects_snapshot_setter((projects) =>
				projects.map((project) => {
					if (project_snapshot!.id === project.id) return update;
					return project;
				}),
			);

			resetProjectDraft();
		} catch (error) {
			projects_snapshot_setter((projects) =>
				projects.map((project) => {
					if (project_snapshot!.id === project.id) return project_snapshot!;
					return project;
				}),
			);
			api_task_setter(null);
			toast.error("Update failed. Please try again later");
			console.error("---savePublishedProjectEdit---\n", error);
		}
	}

	return {
		publish,
		isPending: create_project.isPending,
		savePublishedProjectEdit,
	};
}
