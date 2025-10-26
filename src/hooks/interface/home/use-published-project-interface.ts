import { getProjectContentController } from "@/backend/controllers/home/project/get-project-content.controller";
import { getProjectTechnologiesController } from "@/backend/controllers/home/project/get-project-technologies.controller";
import { input_project_content_atom } from "@/data/data";
import {
	project_technologies_jotai,
	Project,
	project_snapshot_jotai,
} from "@/data/home/home-atoms/home-data";
import { vault_view_jotai } from "@/data/home/home-atoms/home-ui-state";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

export default function usePublishedProjectInterface() {
	const vault_view_setter = useSetAtom(vault_view_jotai);
	const project_snapshot_setter = useSetAtom(project_snapshot_jotai);
	const project_content_setter = useSetAtom(input_project_content_atom);
	const project_technologies_setter = useSetAtom(project_technologies_jotai);

	async function viewProject(project: Project) {
		vault_view_setter("view-project");
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
			vault_view_setter(null);
			console.error("---editProject:getProjectContent---\n", error);
			toast.info("Unable to retrieve project content. Please try again later.");
		}
		project_snapshot_setter(project);
	}
	return { viewProject };
}
