import { getProjectContentController } from "@/backend/get-project-content.controller";
import { getProjectTechnologiesController } from "@/backend/get-project-technologies.controller";
import {
	project_content_jotai,
	project_description_jotai,
	project_technologies_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	Project,
	project_to_edit_jotai,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

export function usePublishedProjectEditOptionInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const project_title_setter = useSetAtom(project_title_jotai);
	const project_to_edit_setter = useSetAtom(project_to_edit_jotai);
	const project_form_step_setter = useSetAtom(project_form_step_jotai);

	//
	const project_description_setter = useSetAtom(project_description_jotai);
	const project_technologies_setter = useSetAtom(project_technologies_jotai);
	const project_thumbnail_setter = useSetAtom(project_thumbnail_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);

	function editProject(project: Project) {
		edit_profile_setter("edit-published-project");
		project_form_step_setter("draft-project-info");
		project_to_edit_setter(project);

		project_title_setter(project.title);
		project_description_setter(project.description);
		// Get Project Technologies
		getProjectTechnologiesController(project.id)
			.then((data) => {
				const { projectTechnologies, error } = data;

				if (error)
					toast.info(
						"Unable to retrieve project content. Please try again later.",
					);
				else project_technologies_setter(projectTechnologies);
			})
			.catch((error) => {
				console.log("---editProject:getProjectContent---\n", error);
				toast.info(
					"Unable to retrieve project content. Please try again later.",
				);
			});
		project_thumbnail_setter(project.thumbnail);

		// Get Project Content
		getProjectContentController(project.id)
			.then((data) => {
				const { projectContent, error } = data;

				if (error)
					toast.info(
						"Unable to retrieve project content. Please try again later.",
					);
				else project_content_setter(projectContent);
			})
			.catch((error) => {
				console.log("---editProject:getProjectContent---\n", error);
				toast.info(
					"Unable to retrieve project content. Please try again later.",
				);
			});
	}
	return { editProject };
}
