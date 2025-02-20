import { UserLocation } from "@/data/atoms/app_data";

export async function getUserLocation(userId: string) {
	const res = await fetch(
		process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/user-locations/" + userId,
	);
	const { location } = await res.json();

	return location as UserLocation;
}
