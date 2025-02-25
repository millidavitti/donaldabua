import { getProjectContentController } from "@/backend/get-project-content.controller";
import { getProjectTechnologiesController } from "@/backend/get-project-technologies.controller";
import {
	selected_project_jotai,
	project_content_jotai,
	project_technologies_jotai,
	Project,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

export default function usePublishedProjectInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const selected_project_setter = useSetAtom(selected_project_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	const project_technologies_setter = useSetAtom(project_technologies_jotai);

	function viewProject(project: Project) {
		edit_profile_setter("view-project");
		selected_project_setter(project);

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
				console.log("---viewProject:getProjectContent---\n", error);
				toast.info(
					"Unable to retrieve project content. Please try again later.",
				);
			});

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
				console.log("---viewProject:getProjectContent---\n", error);
				toast.info(
					"Unable to retrieve project content. Please try again later.",
				);
			});
	}
	return { viewProject };
}
