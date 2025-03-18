import {
	APIResponse,
	Technology,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getProfileTechnologiesController(profileId: string) {
	try {
		const res = await fetch(ENDPOINTS.profileTechnology.list(profileId), {
			method: "GET",
			credentials: "include",
		});
		const data = await res.json();
		console.log(data);
		return data as APIResponse<Technology[], "profileTechnologies">;
	} catch (error) {
		console.error("---getProfileTechnologiesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
