import {
	defaultStore,
	portfolio_project_content_jotai,
	portfolio_project_description_jotai,
	portfolio_project_tech_stack_jotai,
	portfolio_project_thumbnail_jotai,
	portfolio_project_title_jotai,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";

export default function useResetPortfolioProjectFormFields() {
	const portfolio_project_title_setter = useSetAtom(
		portfolio_project_title_jotai,
	);
	const portfolio_project_description_setter = useSetAtom(
		portfolio_project_description_jotai,
	);
	const portfolio_project_content_setter = useSetAtom(
		portfolio_project_content_jotai,
	);
	const portfolio_project_tech_stack_setter = useSetAtom(
		portfolio_project_tech_stack_jotai,
	);
	const portfolio_project_thumbnail_setter = useSetAtom(
		portfolio_project_thumbnail_jotai,
	);
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);

	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	function resetPortfolioProjectFormFields() {
		portfolio_project_title_setter("");
		portfolio_project_description_setter("");
		portfolio_project_content_setter([]);
		portfolio_project_tech_stack_setter([]);
		portfolio_project_thumbnail_setter("");
		portfolio_project_form_step_setter(null);
		edit_profile_setter(null);
	}
	return resetPortfolioProjectFormFields;
}
