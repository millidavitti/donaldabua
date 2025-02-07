import {
	portfolio_project_content_jotai,
	portfolio_project_data_jotai,
	portfolio_project_description_jotai,
	portfolio_project_tech_stack_jotai,
	portfolio_project_thumbnail_jotai,
	portfolio_project_title_jotai,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { mock_portfolio_projects_jotai } from "@/data/mock";
import { useAtom, useSetAtom } from "jotai";

export default function usePublishPortfolioProjectInterface() {
	const [portfolio_project_data] = useAtom(portfolio_project_data_jotai);
	const mock_portfolio_projects_setter = useSetAtom(
		mock_portfolio_projects_jotai,
	);
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

	function publishPortfolioProject() {
		mock_portfolio_projects_setter((projects) => [
			...projects,
			portfolio_project_data,
		]);
		resetPortfolioProjectFormFields();
	}

	function resetPortfolioProjectFormFields() {
		portfolio_project_title_setter("");
		portfolio_project_description_setter("");
		portfolio_project_content_setter([]);
		portfolio_project_tech_stack_setter([]);
		portfolio_project_thumbnail_setter("");
		portfolio_project_form_step_setter("draft-project-info");
		edit_profile_setter(null);
	}
	return { publishPortfolioProject };
}
