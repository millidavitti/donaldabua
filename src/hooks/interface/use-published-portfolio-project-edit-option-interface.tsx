import {
	portfolio_project_content_jotai,
	portfolio_project_description_jotai,
	portfolio_project_tech_stack_jotai,
	portfolio_project_thumbnail_jotai,
	portfolio_project_title_jotai,
	PortfolioProjectData,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import React from "react";

export default function usePublishedPortfolioProjectEditOptionInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const portfolio_project_title_setter = useSetAtom(
		portfolio_project_title_jotai,
	);
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);

	const portfolio_project_description_setter = useSetAtom(
		portfolio_project_description_jotai,
	);
	const portfolio_project_tech_stack_setter = useSetAtom(
		portfolio_project_tech_stack_jotai,
	);
	const portfolio_project_thumbnail_setter = useSetAtom(
		portfolio_project_thumbnail_jotai,
	);
	const portfolio_project_content_setter = useSetAtom(
		portfolio_project_content_jotai,
	);
	function edit(project: PortfolioProjectData) {
		edit_profile_setter("edit-published-portfolio-project");
		portfolio_project_form_step_setter("draft-project-info");

		portfolio_project_title_setter(project.title);
		portfolio_project_description_setter(project.description);
		portfolio_project_tech_stack_setter(project.techStack);
		portfolio_project_thumbnail_setter(project.thumbnail);
		portfolio_project_content_setter(project.content);
	}
	return { edit };
}
