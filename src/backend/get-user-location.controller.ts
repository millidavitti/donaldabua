import { UserLocation } from "@/data/atoms/app_data";

export async function getUserLocation(userId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/user-locations/" +
				userId,
		);
		const { location } = await res.json();

		return location as UserLocation;
	} catch (error) {
		console.log("---getUserLocation---\n", error);
		return {
			city: "Failed to fetch user location",
			country: "Failed to fetch user",
		} as UserLocation;
	}
}
