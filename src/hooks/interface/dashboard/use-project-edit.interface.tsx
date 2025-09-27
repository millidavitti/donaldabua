import {
	Project,
	ProjectContent,
	Technology,
} from "@/data/dashboard/dashboard-atoms/types";
import {
	project_technologies_atom,
	project_content_atom,
	project_atom,
	input_project_atom,
	input_project_technologies_atom,
	input_project_content_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useAtom, useSetAtom } from "jotai";
import { useEditProjects } from "./use-edit-projects.interface";

export function useProjectEdit() {
	const [project_technologies] = useAtom(project_technologies_atom);
	const [project_content] = useAtom(project_content_atom);
	const set_project = useSetAtom(project_atom);
	const set_context = useSetAtom(useEditProjects.context_atom);
	const set_input_project = useSetAtom(input_project_atom);
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const set_input_project_technologies = useSetAtom(
		input_project_technologies_atom,
	);

	const edit = (project: Project) => {
		set_project(project);
		set_input_project(project);
		set_input_project_technologies(project_technologies.data as Technology[]);
		set_input_project_content(project_content.data as ProjectContent[]);
		set_context("draft-project");
	};

	return {
		edit,
	};
}
