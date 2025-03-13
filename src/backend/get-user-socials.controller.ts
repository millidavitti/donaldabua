import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";
import { APIResponse, SocialAccount } from "@/data/atoms/app_data";

export async function getUserSocialsController(userId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT! + "/user-socials/" + userId,
			{
				method: "GET",
				credentials: "include",
				headers,
			},
		);
		const data = await res.json();
		return data as APIResponse<SocialAccount[], "socials">;
	} catch (error) {
		console.error("---getUserSocialsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
