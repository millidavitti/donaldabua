import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function getProjects(profileId: string) {
	try {
		const res = await fetch(ENDPOINTS.project.list(profileId), {
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@getProjects.controller:", error);
	}
}
