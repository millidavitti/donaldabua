import {
	project_content_jotai,
	project_description_jotai,
	project_technologies_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	Project,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	project_form_step_jotai,
	project_to_edit_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";

export default function usePublishedProjectEditOptionInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const project_title_setter = useSetAtom(project_title_jotai);
	const project_to_edit_setter = useSetAtom(project_to_edit_jotai);
	const project_form_step_setter = useSetAtom(project_form_step_jotai);

	//
	const project_description_setter = useSetAtom(project_description_jotai);
	const project_tech_stack_setter = useSetAtom(project_technologies_jotai);
	const project_thumbnail_setter = useSetAtom(project_thumbnail_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	function edit(project: Project) {
		edit_profile_setter("edit-published-portfolio-project");
		project_form_step_setter("draft-project-info");
		project_to_edit_setter(project.id);

		project_title_setter(project.title);
		project_description_setter(project.description);
		project_tech_stack_setter([]);
		project_thumbnail_setter(project.thumbnail);
		project_content_setter([]);
	}
	return { edit };
}
