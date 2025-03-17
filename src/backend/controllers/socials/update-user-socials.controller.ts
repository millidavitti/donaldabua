import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";
import { APIResponse, SocialAccount } from "@/data/home/home-atoms/home-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function updateUserSocialsController(
	socialAccountId: string,
	update: Partial<SocialAccount>,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");
	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.socials.update(socialAccountId), {
			method: "PUT",
			body: JSON.stringify(update),
			headers,
			credentials: "include",
		});
		const data = await res.json();
		return data as APIResponse<SocialAccount, "socialAccount">;
	} catch (error) {
		console.error("---updateUserSocialsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
