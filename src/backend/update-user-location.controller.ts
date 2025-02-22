"use server";
import { UserLocation } from "@/data/atoms/app_data";

export async function updateUserLocationController(
	userId: string,
	update: Partial<UserLocation>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/user-locations/" +
				userId,
			{
				method: "PUT",
				body: JSON.stringify(update),
				headers,
			},
		);
		const data = await res.json();

		return data as {
			success: boolean;
			location: UserLocation;
			error?: unknown;
		};
	} catch (error) {
		console.log("---updateUserLocationController---\n", error);
		throw error;
	}
}
