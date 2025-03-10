import { APIResponse, User } from "@/data/atoms/app_data";
import { auth } from "@/utils/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function getUserController() {
	try {
		const { user, error } = await auth();
		if (user) {
			const res = await fetch(
				process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/users/" + user.id,
				{ method: "GET", credentials: "include" },
			);
			const data = await res.json();

			return data as APIResponse<User, "user">;
		} else if (error) throw new Error(error);
		return {} as APIResponse<User, "user">;
	} catch (error) {
		console.log("---getUserController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
