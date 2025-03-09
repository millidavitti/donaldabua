import { APIResponse, Technology } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function getProfileTechnologiesController(profileId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/profile-technologies/" +
				profileId,
			{
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "profileTechnologies">;
	} catch (error) {
		console.log("---getProfileTechnologiesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
