import {
	APIResponse,
	User,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { auth } from "@/utils/auth";
import { getErrorMessage } from "@/utils/get-error-message";
import { ENDPOINTS } from "../../../endpoints/endpoints";

export async function getUserController() {
	try {
		const { user, error } = await auth();
		if (user) {
			const res = await fetch(ENDPOINTS.user.read(user.id), {
				method: "GET",
				credentials: "include",
			});
			const data = await res.json();

			return data as APIResponse<User, "user">;
		} else if (error) throw new Error(error);
		return {} as APIResponse<User, "user">;
	} catch (error) {
		console.error("---getUserController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
