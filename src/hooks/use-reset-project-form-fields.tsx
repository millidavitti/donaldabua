import {
	project_content_jotai,
	project_description_jotai,
	project_snapshot_jotai,
	project_technologies_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";

export function useResetProjectFormFields() {
	const project_title_setter = useSetAtom(project_title_jotai);
	const project_description_setter = useSetAtom(project_description_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	const project_technologies_setter = useSetAtom(project_technologies_jotai);
	const project_thumbnail_setter = useSetAtom(project_thumbnail_jotai);
	const project_form_step_setter = useSetAtom(project_form_step_jotai);
	const project_snapshot_setter = useSetAtom(project_snapshot_jotai);
	const edit_profile_setter = useSetAtom(edit_profile_jotai);

	function resetProjectFormFields() {
		project_title_setter("");
		project_description_setter("");
		project_content_setter([]);
		project_technologies_setter([]);
		project_thumbnail_setter("");
		project_form_step_setter(null);
		edit_profile_setter(null);
		project_snapshot_setter(null);
	}
	return resetProjectFormFields;
}
