import {
	APIResponse,
	User,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

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

		const res = await fetch(ENDPOINTS.user.update(userId), {
			method: "PUT",
			body: JSON.stringify(update),
			headers,
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<User, "user">;
	} catch (error) {
		console.error("---updateUserController---\n", error);
		throw error;
	}
}
