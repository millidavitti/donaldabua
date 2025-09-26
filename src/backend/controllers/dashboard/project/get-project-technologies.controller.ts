import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function getProjectTechnologies(projectId: string) {
	try {
		const res = await fetch(ENDPOINTS.projectTechnologies.list(projectId), {
			method: "GET",
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@getProjectTechnologies.controller", error);
	}
}
