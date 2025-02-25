import { APIResponse, UserLocation } from "@/data/atoms/app_data";

export async function getUserLocationController(userId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/user-locations/" +
				userId,
		);
		const data = await res.json();

		return data as APIResponse<UserLocation, "location">;
	} catch (error) {
		console.log("---getUserLocationController---\n", error);
		throw error;
	}
}
