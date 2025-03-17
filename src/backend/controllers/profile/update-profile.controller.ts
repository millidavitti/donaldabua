import { APIResponse, UserProfile } from "@/data/home/home-atoms/home-data";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function updateUserProfile(
	profileId: string,
	update: Partial<UserProfile>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.profile.update(profileId), {
			method: "PUT",
			body: JSON.stringify(update),
			headers,
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<UserProfile, "profile">;
	} catch (error) {
		console.error("---updateUserProfile---\n", error);
		throw error;
	}
}
