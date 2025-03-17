import {
	APIResponse,
	UserProfile,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";

export async function getProfilesController(userId: string) {
	const headers = new Headers();
	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT! +
				"/profiles/user/" +
				userId,
			{
				method: "GET",
				credentials: "include",
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<UserProfile[], "profiles">;
	} catch (error) {
		console.error("---getProfilesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
