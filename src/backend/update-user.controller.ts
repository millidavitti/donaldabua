import { APIResponse, User } from "@/data/atoms/app_data";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";

export async function updateUserController(
	userId: string,
	update: Partial<User>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/users/" + userId,
			{
				method: "PUT",
				body: JSON.stringify(update),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<User, "user">;
	} catch (error) {
		console.error("---updateUserController---\n", error);
		throw error;
	}
}
