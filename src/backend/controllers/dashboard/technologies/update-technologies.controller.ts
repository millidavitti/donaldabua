import { Technology } from "@/data/dashboard/dashboard-atoms/types";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateTechnologies(technologies: Technology[]) {
	try {
		const res = await fetch(ENDPOINTS.technologies.update(), {
			method: "PATCH",
			body: JSON.stringify(technologies),
			headers: {
				"Content-type": "application/json",
			},
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@updateTechnologies.controller", error);
	}
}
