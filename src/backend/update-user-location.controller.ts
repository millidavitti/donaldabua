import { APIResponse, UserLocation } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";

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

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/user-locations/" +
				userId,
			{
				method: "PUT",
				body: JSON.stringify(update),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<UserLocation, "location">;
	} catch (error) {
		console.log("---updateUserLocationController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
