import { getErrorMessage } from "@/utils/get-error-message";
import {
	APIResponse,
	SocialAccount,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getUserSocialsController(userId: string) {
	const headers = new Headers();

	try {
		const res = await fetch(ENDPOINTS.socials.list(userId), {
			method: "GET",
			credentials: "include",
			headers,
		});
		const data = await res.json();
		return data as APIResponse<SocialAccount[], "socials">;
	} catch (error) {
		console.error("---getUserSocialsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
