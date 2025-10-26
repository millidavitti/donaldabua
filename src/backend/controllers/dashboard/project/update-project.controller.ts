import { ProjectData } from "@/data/types";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateProject(update: ProjectData) {
	try {
		const res = await fetch(ENDPOINTS.project.update(), {
			method: "PATCH",
			body: JSON.stringify(update),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@updateProject.controller", error);
	}
}
