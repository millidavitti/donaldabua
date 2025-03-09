import { APIResponse, UserProfile } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function createProfileController(
	userId: string,
	profile: Partial<UserProfile>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/profiles/" + userId,
			{
				method: "POST",
				body: JSON.stringify(profile),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<UserProfile, "profile">;
	} catch (error) {
		console.log("---createProfileController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
