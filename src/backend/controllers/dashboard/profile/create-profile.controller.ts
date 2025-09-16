import { Profile } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function createProfile(profile: Partial<Profile>) {
	try {
		const res = await fetch(ENDPOINTS.profile.create(), {
			method: "POST",
			body: JSON.stringify(profile),
			headers: {
				"Content-type": "application/json",
			},
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@createProfile.controller", error);
	}
}
