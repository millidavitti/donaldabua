import { useResetProjectFormFields } from "../../use-reset-project-form-fields";
import { useAtomValue, useSetAtom } from "jotai";
import {
	component_to_edit_jotai,
	dashboard_view_jotai,
	project_form_step_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import {
	project_content_jotai,
	project_technologies_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { toast } from "sonner";

export function useDraftProjectInterface() {
	const dashboard_view = useAtomValue(dashboard_view_jotai);
	const project_form_step_setter = useSetAtom(project_form_step_jotai);
	const resetProjectFormFields = useResetProjectFormFields();
	const component_to_edit_setter = useSetAtom(component_to_edit_jotai);
	const project_technologies = useAtomValue(project_technologies_jotai);
	const project_content = useAtomValue(project_content_jotai);

	function gotToPreview() {
		const formElements = document.querySelectorAll("[id^='project']");
		formElements.forEach((el) => {
			const field = (el as HTMLInputElement).validity;
			if (!field.valid) {
				(el as HTMLElement).style.backgroundColor = "#fecaca";
				(el as HTMLElement).style.outlineColor = "#dc2626";
				el.scrollIntoView({ behavior: "smooth" });
			}
		});
		if (
			Array.from(formElements).every(
				(el) => (el as HTMLInputElement).validity.valid === true,
			)
		) {
			if (project_technologies.length)
				if (project_content.length)
					project_form_step_setter("preview-project-draft");
				else {
					toast.info("You must provide at least one content block");
					(
						document.querySelector("#content-builder") as HTMLElement
					).style.outlineColor = "#dc2626";
				}
			else {
				toast.info("You must provide at least one technology");
				(
					document.querySelector("#select-technology") as HTMLInputElement
				).focus();
			}
		}
		component_to_edit_setter(null);
	}

	function closeProjectForm() {
		resetProjectFormFields();
	}
	return {
		resetProjectFormFields,
		gotToPreview,
		closeProjectForm,
		edit_profile: dashboard_view,
	};
}
