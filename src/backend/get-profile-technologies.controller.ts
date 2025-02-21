import { Technology } from "@/data/atoms/app_data";

export async function getProfileTechnologies(profileId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/profile-technologies/" +
				profileId,
		);
		const { profileTechnologies } = await res.json();

		return profileTechnologies as Technology[];
	} catch (error) {
		console.log("---getProfileTechnologies---\n", error);
		return [];
	}
}
