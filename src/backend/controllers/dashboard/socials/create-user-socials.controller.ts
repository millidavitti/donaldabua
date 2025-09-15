import { Social } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function createSocial(socials: Social) {
	try {
		delete socials.id;

		const res = await fetch(ENDPOINTS.socials.create(), {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(socials),
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog(
			"createSocials@src/backend/controllers/dashboard/socials",
			error,
		);
	}
}
