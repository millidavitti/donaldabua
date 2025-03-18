import {
	APIResponse,
	UserLocation,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getUserLocationController(userId: string) {
	try {
		const res = await fetch(ENDPOINTS.location.read(userId), {
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<UserLocation, "location">;
	} catch (error) {
		console.error("---getUserLocationController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
