import { portfolio_project_form_step_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import React from "react";

export default function usePreviewPortfolioProjectDraftInterface() {
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);

	function goBack() {
		portfolio_project_form_step_setter("draft-project-info");
	}
	return { goBack };
}
