import { useResetProjectFormFields } from "../../use-reset-project-form-fields";
import { useAtom, useSetAtom } from "jotai";
import {
	dashboard_view_jotai,
	project_form_step_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";

export function useEditProfileProjectsInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [project_form_step, project_form_step_setter] = useAtom(
		project_form_step_jotai,
	);
	const resetProjectFormFields = useResetProjectFormFields();

	function addNewProject() {
		resetProjectFormFields();
		dashboard_view_setter("edit-portfolio");
		project_form_step_setter("draft-project-info");
	}
	return { addNewProject, project_form_step };
}
