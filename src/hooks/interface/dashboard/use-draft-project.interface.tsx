import { useAtomValue, useSetAtom } from "jotai";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { toast } from "sonner";
import { input_project_technologies_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useEditProjects } from "./use-edit-projects.interface";
import { useResetProjectFormFields } from "@/hooks/use-reset-project-form-fields";

export function useDraftProject() {
	const dashboard_view = useAtomValue(dashboard_view_jotai);
	const project_technologies = useAtomValue(input_project_technologies_atom);
	const project_content = useAtomValue(input_project_content_atom);
	const set_context = useSetAtom(useEditProjects.context_atom);
	const resetProjectFormFields = useResetProjectFormFields();

	const close = () => {
		set_context(null);
		resetProjectFormFields();
	};
	function previewDraft() {
		const formElements = document.querySelectorAll("[id^='draft']");
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
				if (project_content.length) set_context("preview-draft");
				else {
					toast.info("You must provide at least one content block");
					(
						document.querySelector("#content-builder") as HTMLElement
					).style.outlineColor = "#dc2626";
				}
			else {
				toast.info("You must provide at least one technology");
				(
					document.querySelector(
						"#select-project-technology",
					) as HTMLInputElement
				).focus();
			}
		}
	}

	return {
		previewDraft,
		close,
		edit_profile: dashboard_view,
	};
}
