import { useAtom, useAtomValue } from "jotai";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { toast } from "sonner";
import { input_project_technologies_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useEditProjects } from "../components/profile/interfaces/use-projects.interface";
import { useResetProjectDraft } from "@/hooks/use-reset-project-draft";

export function useDraft() {
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
		const draft = Array.from(document.querySelectorAll("[id^='draft']")).filter(
			(node) => !(node as HTMLInputElement).validity.valid,
		);
		const isDraftValid = draft.every(
			(el) => (el as HTMLInputElement).validity.valid,
		);
		draft.forEach((el, _, draft) => {
			const isInputValid = (el as HTMLInputElement).validity.valid;

			if (!isInputValid) {
				const input = el as HTMLElement;
				input.classList.add("outline-red-600", "outline-1", "outline");
				(draft[0] as HTMLInputElement).placeholder = "Start here";
				setTimeout(
					() =>
						input.classList.remove("outline-red-600", "outline-1", "outline"),
					1500,
				);
				draft[0].scrollIntoView({ behavior: "smooth" });
			}
		});

		if (isDraftValid) {
			if (hasTechnologies) {
				if (hasContent) {
					if (context === "draft-project") set_context("preview-draft");
					else set_context("preview-update");
				} else {
					toast.info("You must provide at least one content block");
					const contentBuilder = document.querySelector(
						"#content-builder",
					) as HTMLElement;
					contentBuilder.classList.add("border-red-600", "border-[2px]");
					setTimeout(
						() =>
							contentBuilder.classList.remove("border-red-600", "border-[2px]"),
						1500,
					);
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
