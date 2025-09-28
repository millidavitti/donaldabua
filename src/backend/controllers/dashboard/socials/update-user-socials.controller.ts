import { Social } from "@/data/dashboard/dashboard-atoms/types";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateSocial(socials: Partial<Social>) {
	try {
		const res = await fetch(ENDPOINTS.socials.update(), {
			method: "PATCH",
			body: JSON.stringify(socials),
			headers: {
				"Content-type": "application/json",
			},
			credentials: "include",
		});
		const json = await res.json();
		return json;
	} catch (error) {
		generateErrorLog(
			"updateSocials@src/backend/controllers/dashboard/socials",
			error,
		);
	}
}
