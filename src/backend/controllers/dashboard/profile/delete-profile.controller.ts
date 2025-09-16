import { Profile } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function deleteProfile(profile: Partial<Profile>) {
	try {
		const res = await fetch(ENDPOINTS.profile.delete(), {
			method: "DELETE",
			credentials: "include",
			body: JSON.stringify(profile),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@deleteProfile.controller", error);
	}
}
