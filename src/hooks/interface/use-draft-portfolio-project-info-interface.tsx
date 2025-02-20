import useResetPortfolioProjectFormFields from "../use-reset-portfolio-project-form-fields";
import { useAtom, useSetAtom } from "jotai";
import {
	component_to_edit_jotai,
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";

export default function useDraftPortfolioProjectInfoInterface() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);
	const resetPortfolioProjectFormFields = useResetPortfolioProjectFormFields();
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
			portfolio_project_form_step_setter("preview-project-draft");
		component_to_edit_setter(null);
	}

	function closePortfolioProjectForm() {
		edit_profile_setter(null);
		resetPortfolioProjectFormFields();
	}
	return {
		resetPortfolioProjectFormFields,
		gotToPreview,
		closePortfolioProjectForm,
		edit_profile,
	};
}
