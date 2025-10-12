import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function deleteProject(projectId: string) {
	try {
		const res = await fetch(ENDPOINTS.project.delete(projectId), {
			method: "DELETE",
			credentials: "include",
			// This is because of a bug in Honno csrf middleware
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@deleteProject.controller", error);
	}
}
