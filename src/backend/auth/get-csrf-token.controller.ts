import { APIResponse } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function generateCsrfToken() {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(process.env.NEXT_PUBLIC_AUTH_ENDPOINT! + "/csrf", {
			method: "GET",
			credentials: "include",
			headers,
		});
		const data = await res.json();

		return data as APIResponse<string, "csrfToken">;
	} catch (error) {
		console.error("---generateCsrfToken---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
