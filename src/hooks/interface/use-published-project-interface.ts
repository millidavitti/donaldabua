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

	async function viewProject(project: Project) {
		edit_profile_setter("view-project");
		try {
			const [
				{ projectTechnologies, error: projectTechnologiesError },
				{ projectContent, error: projectContentError },
			] = await Promise.all([
				getProjectTechnologiesController(project.id),
				getProjectContentController(project.id),
			]);

			if (projectTechnologiesError || projectContentError)
				throw projectTechnologiesError || projectContentError;

			project_technologies_setter(projectTechnologies);
			project_content_setter(projectContent);
		} catch (error) {
			console.log("---editProject:getProjectContent---\n", error);
			edit_profile_setter(null);
			toast.info("Unable to retrieve project content. Please try again later.");
		}
		selected_project_setter(project);
	}
	return { viewProject };
}
