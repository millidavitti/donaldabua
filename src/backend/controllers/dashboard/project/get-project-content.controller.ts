import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function getProjectContent(projectId: string) {
	try {
		const res = await fetch(ENDPOINTS.projectContent.list(projectId), {
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@getProjectContent.controller:", error);
	}
}
