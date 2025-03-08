import { APIResponse, User } from "@/data/atoms/app_data";

export async function getUserController() {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/users/",
			{ method: "GET", credentials: "include" },
		);
		const {
			users: [user],
			error,
		} = await res.json();

		return { user, error } as APIResponse<User, "user">;
	} catch (error) {
		console.log("---getUserController---\n", error);
		throw error;
	}
}
