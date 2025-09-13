import { UserLocation } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateUserLocationController(
	update: Partial<UserLocation>,
) {
	try {
		const res = await fetch(ENDPOINTS.location.updateLocation(), {
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
		generateErrorLog("@updateUserLocationController", error);
	}
}
