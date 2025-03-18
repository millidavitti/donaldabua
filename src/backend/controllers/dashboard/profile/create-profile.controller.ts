import {
	APIResponse,
	UserProfile,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateCsrfToken } from "@/backend/auth/get-csrf-token.controller";

export async function createProfileController(
	userId: string,
	profile: Partial<UserProfile>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.profile.create(userId), {
			method: "POST",
			body: JSON.stringify(profile),
			headers,
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<UserProfile, "profile">;
	} catch (error) {
		console.error("---createProfileController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
