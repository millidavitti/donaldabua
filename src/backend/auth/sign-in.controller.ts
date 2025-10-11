import { generateErrorLog } from "@/utils/generate-error-log";

export async function signInController(formData: { email: string }) {
	try {
		const endpoint = process.env.NEXT_PUBLIC_AUTH_ENDPOINT + "/send-magic-link";

		const res = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-type": "application/json",
			},
			credentials: "include",
		});

		const { error, message } = await res.json();

		if (error) throw new Error(error);
		return { message };
	} catch (error) {
		generateErrorLog("@siginController", error);
	}
}
