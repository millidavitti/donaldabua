import { useResetProjectFormFields } from "../use-reset-project-form-fields";
import { useAtom, useSetAtom } from "jotai";
import {
	edit_profile_jotai,
	project_form_step_jotai,
} from "@/data/atoms/ui_state";

export function useEditProfileProjectsInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [project_form_step, project_form_step_setter] = useAtom(
		project_form_step_jotai,
	);
	const resetProjectFormFields = useResetProjectFormFields();

	function addNewProject() {
		resetProjectFormFields();
		edit_profile_setter("edit-portfolio");
		project_form_step_setter("draft-project-info");
  // getTechnologies()
	}
	return { addNewProject, project_form_step };
}
