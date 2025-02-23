import { UserProfile } from "@/data/atoms/app_data";

export async function getUserProfile(userId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/profiles/" + userId,
		);
		const { profile } = await res.json();

		return profile as UserProfile;
	} catch (error) {
		console.log("---getUserProfile---\n", getUserProfile);
		return {
			id: "",
			title: "Failed to fetch profile",
			hourlyRate: 0,
			overview: "Failed to fetch profile",
			availability: "None",
		} as UserProfile;
	}
}
