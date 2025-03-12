import { APIResponse, Technology } from "@/data/atoms/app_data";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";

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
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/profile-technologies/" +
				profileId,
			{
				method: "PUT",
				body: JSON.stringify(profileTechnologies),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<unknown, "info">;
	} catch (error) {
		console.log("---updateProfileTechnologiesController---\n", error);
		throw error;
	}
}
