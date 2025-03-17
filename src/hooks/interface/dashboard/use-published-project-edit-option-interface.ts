import { getProjectContentController } from "@/backend/controllers/project/get-project-content.controller";
import { getProjectTechnologiesController } from "@/backend/controllers/project/get-project-technologies.controller";
import {
	project_content_jotai,
	project_description_jotai,
	project_technologies_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	Project,
	project_snapshot_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import {
	dashboard_view_jotai,
	project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

export function usePublishedProjectEditOptionInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const project_title_setter = useSetAtom(project_title_jotai);
	const project_snapshot_setter = useSetAtom(project_snapshot_jotai);
	const project_form_step_setter = useSetAtom(project_form_step_jotai);
	const project_description_setter = useSetAtom(project_description_jotai);
	const project_technologies_setter = useSetAtom(project_technologies_jotai);
	const project_thumbnail_setter = useSetAtom(project_thumbnail_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);

	async function editProject(project: Project) {
		dashboard_view_setter("edit-published-project");
		project_snapshot_setter(project);
		project_title_setter(project.title);
		project_description_setter(project.description);
		project_thumbnail_setter(project.thumbnail);
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
			console.error("---editProject:getProjectContent---\n", error);
			toast.info("Unable to retrieve project content. Please try again later.");
		}

		project_form_step_setter("draft-project-info");
	}
	return { editProject };
}
