import { APIResponse, User } from "@/data/atoms/app_data";
import { auth } from "@/backend/auth/auth";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "../../endpoints/endpoints";

export async function getUsersController() {
	try {
		const res = await fetch(ENDPOINTS.user.list, {
			method: "GET",
			credentials: "include",
		});

		const data = await res.json();
		console.log(data);
		return data as APIResponse<User[], "users">;
	} catch (error) {
		console.error("---getUsersController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
