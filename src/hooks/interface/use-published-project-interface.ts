import { getProjectContentController } from "@/backend/get-project-content.controller";
import { getProjectTechnologiesController } from "@/backend/get-project-technologies.controller";
import {
	project_content_jotai,
	project_technologies_jotai,
	Project,
	project_snapshot_jotai,
} from "@/data/atoms/app_data";
import { dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

export default function usePublishedProjectInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const project_snapshot_setter = useSetAtom(project_snapshot_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	const project_technologies_setter = useSetAtom(project_technologies_jotai);

	async function viewProject(project: Project) {
		dashboard_view_setter("view-project");
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
			dashboard_view_setter(null);
			console.log("---editProject:getProjectContent---\n", error);
			toast.info("Unable to retrieve project content. Please try again later.");
		}
		project_snapshot_setter(project);
	}
	return { viewProject };
}
