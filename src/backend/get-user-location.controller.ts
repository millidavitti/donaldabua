import { APIResponse, UserLocation } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function getUserLocationController(userId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/user-locations/" +
				userId,
			{ credentials: "include" },
		);
		const data = await res.json();

		return data as APIResponse<UserLocation, "location">;
	} catch (error) {
		console.log("---getUserLocationController---\n", error);
	throw new Error(getErrorMessage(error));
	}
}
