import { useResetProjectFormFields } from "../use-reset-project-form-fields";
import { useAtom, useSetAtom } from "jotai";
import {
	edit_profile_jotai,
	project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { getTechnologiesController } from "@/backend/get-technologies.controller";
import { toast } from "sonner";
import { technologies_jotai } from "@/data/atoms/app_data";

export function useEditProfileProjectsInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [project_form_step, project_form_step_setter] = useAtom(
		project_form_step_jotai,
	);
	const [technologies, technologies_setter] = useAtom(technologies_jotai);
	const resetProjectFormFields = useResetProjectFormFields();

	function addNewProject() {
		resetProjectFormFields();
		edit_profile_setter("edit-portfolio");
		project_form_step_setter("draft-project-info");

		if (!technologies.length)
			getTechnologiesController().then((data) => {
				const { error, technologies } = data;
				console.log(technologies);
				if (error) {
					toast.info(
						"Unable to retrieve technologies at this time. Please try again later.",
					);
				} else technologies_setter(technologies);
			});
	}
	return { addNewProject, project_form_step };
}
