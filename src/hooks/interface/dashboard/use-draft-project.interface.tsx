import { useAtom, useAtomValue } from "jotai";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { toast } from "sonner";
import { input_project_technologies_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useEditProjects } from "./use-edit-projects.interface";
import { useResetProjectDraft } from "@/hooks/use-reset-project-draft";

export function useDraftProject() {
	const project_technologies = useAtomValue(input_project_technologies_atom);
	const project_content = useAtomValue(input_project_content_atom);
	const [context, set_context] = useAtom(useEditProjects.context_atom);
	const resetProjectFormFields = useResetProjectDraft();
	const hasContent = Boolean(project_content.length);
	const hasTechnologies = Boolean(project_technologies.length);

	const close = () => {
		set_context(null);
		resetProjectFormFields();
	};
	const previewDraft = () => {
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
			if (hasTechnologies) {
				if (hasContent) {
					if (context === "draft-project") set_context("preview-draft");
					else set_context("preview-update");
				} else {
					toast.info("You must provide at least one content block");
					(
						document.querySelector("#content-builder") as HTMLElement
					).style.outlineColor = "#dc2626";
				}
			} else {
				toast.info("You must provide at least one technology");
				(
					document.querySelector(
						"#select-project-technology",
					) as HTMLInputElement
				).focus();
			}
		}
	};

	return {
		previewDraft,
		close,
		context,
	};
}
