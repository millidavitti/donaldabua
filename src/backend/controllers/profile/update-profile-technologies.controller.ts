import { APIResponse, Technology } from "@/data/home/home-atoms/home-data";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function updateProfileTechnologiesController(
	profileId: string,
	profileTechnologies: Technology[],
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const res = await fetch(ENDPOINTS.profileTechnology.update(profileId), {
			method: "PUT",
			body: JSON.stringify(profileTechnologies),
			headers,
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<unknown, "info">;
	} catch (error) {
		console.error("---updateProfileTechnologiesController---\n", error);
		throw error;
	}
}
