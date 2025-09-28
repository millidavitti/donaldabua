import { APIResponse, Profile } from "@/data/dashboard/dashboard-atoms/types";
import { getErrorMessage } from "@/utils/get-error-message";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getProfilesController(userId: string) {
	try {
		const res = await fetch(ENDPOINTS.profile.list(userId), {
			method: "GET",
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<Profile[], "profiles">;
	} catch (error) {
		console.error("---getProfilesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
