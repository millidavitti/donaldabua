import { APIResponse, UserProfile } from "@/data/atoms/app_data";

export async function updateUserProfile(
	profileId: string,
	update: Partial<UserProfile>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/profiles/" + profileId,
			{
				method: "PUT",
				body: JSON.stringify(update),
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<UserProfile, "profile">;
	} catch (error) {
		console.log("---updateUserProfile---\n", error);
		throw error;
	}
}
