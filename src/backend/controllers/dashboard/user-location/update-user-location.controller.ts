import { APIResponse, UserLocation } from "@/data/home/home-atoms/home-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "@/backend/auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function updateUserLocationController(
	userId: string,
	update: Partial<UserLocation>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.location.update(userId), {
			method: "PUT",
			body: JSON.stringify(update),
			headers,
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<UserLocation, "location">;
	} catch (error) {
		console.error("---updateUserLocationController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
