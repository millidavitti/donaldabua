import { UserProfile } from "@/data/atoms/app_data";

export async function getUserProfile(userId: string) {
	const res = await fetch(
		process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/profiles/" + userId,
	);
	const { profile } = await res.json();

	return profile as UserProfile;
}
