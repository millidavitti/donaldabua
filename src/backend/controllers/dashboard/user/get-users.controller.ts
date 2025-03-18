import {
	APIResponse,
	User,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { ENDPOINTS } from "../../../endpoints/endpoints";

export async function getUsersController() {
	try {
		const res = await fetch(ENDPOINTS.user.list(), {
			method: "GET",
			credentials: "include",
		});

		const data = await res.json();
		return data as APIResponse<User[], "users">;
	} catch (error) {
		console.error("---getUsersController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
