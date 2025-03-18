import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import {
	APIResponse,
	ProjectContent,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";

export async function getProjectContentController(projectId: string) {
	try {
		const res = await fetch(ENDPOINTS.projectContent.list(projectId), {
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<ProjectContent, "projectContent">;
	} catch (error) {
		console.error("---getProjectContentController---\n", error);
		throw error;
	}
}
