"use server";
import { User } from "@/data/atoms/app_data";

export async function updateUserController(
	userId: string,
	update: Partial<User>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/users/" + userId,
			{
				method: "PUT",
				body: JSON.stringify(update),
				headers,
			},
		);
		const data = await res.json();

		return data as { success: boolean; user: User; error?: unknown };
	} catch (error) {
		console.log("---updateUserController---\n", error);
		throw error;
	}
}
