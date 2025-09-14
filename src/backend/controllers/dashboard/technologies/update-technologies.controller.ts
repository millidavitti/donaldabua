import {
	APIResponse,
	Technology,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "@/backend/auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateTechnologiesController(technologies: Technology[]) {
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
		generateErrorLog("@updateTechnologiesController", error);
	}
}
