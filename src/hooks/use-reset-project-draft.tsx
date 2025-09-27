import {
	api_task_atom,
	dashboard_view_jotai,
	project_form_step_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import {
	input_project_atom,
	input_project_content_atom,
	input_project_technologies_atom,
} from "@/data/dashboard/dashboard-atoms/data";

export function useResetProjectDraft() {
	const reset_input_project = useResetAtom(input_project_atom);
	const reset_input_project_content = useResetAtom(input_project_content_atom);
	const reset_input_project_technologies = useResetAtom(
		input_project_technologies_atom,
	);

	const project_form_step_setter = useSetAtom(project_form_step_jotai);
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const api_task_setter = useSetAtom(api_task_atom);

	function resetProjectFormFields() {
		reset_input_project();
		reset_input_project_content();
		reset_input_project_technologies();

		project_form_step_setter(null);
		dashboard_view_setter(null);
		api_task_setter(null);
	}
	return resetProjectFormFields;
}
