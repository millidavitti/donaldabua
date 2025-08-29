import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function getUserLocationController() {
	try {
		const res = await fetch(ENDPOINTS.location.getLocation(), {
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@getUserLocationController", error);
	}
}
