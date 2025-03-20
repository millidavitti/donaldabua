import { APIResponse, User } from "@/data/home/home-atoms/home-data";
import { auth } from "@/utils/auth";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "../../../endpoints/endpoints";

export async function getUserController(userId: string) {
	try {
		const res = await fetch(ENDPOINTS.user.read(userId), {
			method: "GET",
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<User, "user">;
	} catch (error) {
		console.error("---getUserController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
