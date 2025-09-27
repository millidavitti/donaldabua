import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useResetProjectDraft } from "../../use-reset-project-draft";
import {
	create_project_atom,
	input_project_atom,
	input_project_technologies_atom,
	input_project_content_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useEditProjects } from "./use-edit-projects.interface";

export function usePublishProject() {
	const input_project_content = useAtomValue(input_project_content_atom);
	const input_project_technologies = useAtomValue(
		input_project_technologies_atom,
	);

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

	async function savePublishedProjectEdit() {}

	return {
		publish,
		isPending: create_project.isPending,
		savePublishedProjectEdit,
	};
}
