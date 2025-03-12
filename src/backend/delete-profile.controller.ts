import { APIResponse, UserProfile } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function deleteProfileController(profileId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT! + "/profiles/" + profileId,
			{
				method: "DELETE",
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<UserProfile, "profile">;
	} catch (error) {
		console.error("---deleteProfileController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
