import useResetProjectFormFields from "../use-reset-project-form-fields";
import { useAtom, useSetAtom } from "jotai";
import {
	component_to_edit_jotai,
	edit_profile_jotai,
	project_form_step_jotai,
} from "@/data/atoms/ui_state";

export function useDraftProjectInterface() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const project_form_step_setter = useSetAtom(project_form_step_jotai);
	const resetProjectFormFields = useResetProjectFormFields();
	const component_to_edit_setter = useSetAtom(component_to_edit_jotai);

	function gotToPreview() {
		const formElements = document.querySelectorAll("[id^='portfolio-project']");
		formElements.forEach((el) => {
			const field = (el as HTMLInputElement).validity;
			if (!field.valid) {
				el.classList.add("bg-red-100");
				el.scrollIntoView({ behavior: "smooth" });
			}
		});
		if (
			Array.from(formElements).every(
				(el) => (el as HTMLInputElement).validity.valid === true,
			)
		)
			project_form_step_setter("preview-project-draft");
		component_to_edit_setter(null);
	}

	function closeProjectForm() {
		edit_profile_setter(null);
		resetProjectFormFields();
	}
	return {
		resetProjectFormFields,
		gotToPreview,
		closeProjectForm,
		edit_profile,
	};
}
