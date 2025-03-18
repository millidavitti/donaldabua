import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import {
	APIResponse,
	Project,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function getProjectsController(profileId: string) {
	try {
		const res = await fetch(ENDPOINTS.project.list(profileId), {
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<Project[], "projects">;
	} catch (error) {
		console.error("---getProjectsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
