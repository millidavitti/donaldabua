import { getErrorMessage } from "@/utils/get-error-message";
import {
	APIResponse,
	Social,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getUserSocialsController(userId: string) {
	try {
		const res = await fetch(ENDPOINTS.socials.list(userId), {
			method: "GET",
			credentials: "include",
		});
		const data = await res.json();
		return data as APIResponse<Social[], "socials">;
	} catch (error) {
		console.error("---getUserSocialsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
