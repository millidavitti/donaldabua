import {
	defaultStore,
	portfolio_project_content_jotai,
	portfolio_project_description_jotai,
	portfolio_project_tech_stack_jotai,
	portfolio_project_thumbnail_jotai,
	portfolio_project_title_jotai,
	portfolio_projects_jotai,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	portfolio_project_to_edit_jotai,
} from "@/data/atoms/ui_state";
import { createId } from "@paralleldrive/cuid2";
import { useAtomValue, useSetAtom } from "jotai";
import useResetPortfolioProjectFormFields from "../use-reset-portfolio-project-form-fields";

export default function usePublishPortfolioProjectInterface() {
	const portfolio_projects_setter = useSetAtom(portfolio_projects_jotai);
	const portfolio_project_to_edit = useAtomValue(
		portfolio_project_to_edit_jotai,
	);
	const edit_profile = useAtomValue(edit_profile_jotai);
	const resetPortfolioProjectFormFields = useResetPortfolioProjectFormFields();

	function publishPortfolioProject() {
		portfolio_projects_setter((projects) => [
			...projects,
			{
				id: createId(),
				content: defaultStore.get(portfolio_project_content_jotai),
				description: defaultStore.get(portfolio_project_description_jotai),
				techStack: defaultStore.get(portfolio_project_tech_stack_jotai),
				thumbnail: defaultStore.get(portfolio_project_thumbnail_jotai),
				title: defaultStore.get(portfolio_project_title_jotai),
			},
		]);

		resetPortfolioProjectFormFields();
	}

	function savePublishedPortfolioProjectEdit() {
		portfolio_projects_setter((projects) =>
			projects.map((project) => {
				if (portfolio_project_to_edit! === project.id)
					return {
						id: createId(),
						content: defaultStore.get(portfolio_project_content_jotai),
						description: defaultStore.get(portfolio_project_description_jotai),
						techStack: defaultStore.get(portfolio_project_tech_stack_jotai),
						thumbnail: defaultStore.get(portfolio_project_thumbnail_jotai),
						title: defaultStore.get(portfolio_project_title_jotai),
					};
				return project;
			}),
		);
		resetPortfolioProjectFormFields();
	}

	return {
		publishPortfolioProject,
		savePublishedPortfolioProjectEdit,
		editProfileState: edit_profile,
	};
}
