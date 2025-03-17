import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";
import { APIResponse, SocialAccount } from "@/data/home/home-atoms/home-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function deleteUserSocialsController(socialAccountId: string) {
	const headers = new Headers();
	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.socials.delete(socialAccountId), {
			method: "DELETE",
			credentials: "include",
			headers,
		});
		const data = await res.json();
		return data as APIResponse<SocialAccount, "socialAccount">;
	} catch (error) {
		console.error("---deleteUserSocialsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
