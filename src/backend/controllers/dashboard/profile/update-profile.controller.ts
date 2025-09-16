import { Profile } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateProfile(update: Partial<Profile>) {
	try {
		const res = await fetch(ENDPOINTS.profile.update(), {
			method: "PATCH",
			body: JSON.stringify(update),
			headers: { "Content-type": "application/json" },
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@updateProfile.controller", error);
	}
}
