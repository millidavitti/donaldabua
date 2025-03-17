import { project_form_step_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useSetAtom } from "jotai";

export function usePreviewProjectDraftInterface() {
	const project_form_step_setter = useSetAtom(project_form_step_jotai);

	function goBack() {
		project_form_step_setter("draft-project-info");
	}
	return { goBack };
}
