import { APIResponse, UserLocation } from "@/data/home/home-atoms/home-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getUserLocationController(userId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.location.getLocation(userId), {
			credentials: "include",
			headers,
		});
		const data = await res.json();

		return data as APIResponse<UserLocation, "location">;
	} catch (error) {
		console.error("---getUserLocationController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
