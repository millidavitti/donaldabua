import { APIResponse, Technology } from "@/data/atoms/app_data";

export async function getProfileTechnologiesController(profileId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/profile-technologies/" +
				profileId,
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "profileTechnologies">;
	} catch (error) {
		console.log("---getProfileTechnologiesController---\n", error);
		throw error;
	}
}
