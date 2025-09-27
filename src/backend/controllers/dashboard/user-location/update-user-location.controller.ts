import { UserLocation } from "@/data/dashboard/dashboard-atoms/types";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateLocation(update: Partial<UserLocation>) {
	try {
		const res = await fetch(ENDPOINTS.location.update(), {
			method: "PATCH",
			body: JSON.stringify(update),
			headers: {
				"Content-type": "application/json",
			},
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@updateLocaton.controller", error);
	}
}
