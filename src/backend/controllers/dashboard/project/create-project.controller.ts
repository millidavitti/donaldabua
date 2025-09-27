import {
	Project,
	ProjectContent,
	Technology,
} from "@/data/dashboard/dashboard-atoms/types";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function createProject(
	profileId: string,
	project: {
		project: Project;
		technologies: Technology[];
		content: ProjectContent[];
	},
) {
	try {
		const res = await fetch(ENDPOINTS.project.create(profileId), {
			method: "POST",
			body: JSON.stringify(project),
			headers: {
				"Content-type": "application/json",
			},
			credentials: "include",
		});
		const json = await res.json();
		return json;
	} catch (error) {
		generateErrorLog("@createProject.controller", error);
	}
}
