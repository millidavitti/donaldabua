import {
	APIResponse,
	User,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { auth } from "@/utils/auth";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "../../endpoints/endpoints";

export async function getUserController() {
	const headers = new Headers();

	try {
		const { error: err, csrfToken } = await generateCsrfToken();
		if (err) throw new Error(err);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const { user, error } = await auth();
		if (user) {
			const res = await fetch(ENDPOINTS.user.read(user.id), {
				method: "GET",
				credentials: "include",
				headers,
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
