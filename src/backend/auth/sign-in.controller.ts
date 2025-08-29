import { generateErrorLog } from "@/utils/generate-error-log";

export async function signInController(formData: { email: string }) {
	try {
		const headers = new Headers();
		headers.append("Content-type", "application/json");
		const res = await fetch(
			process.env.NEXT_PUBLIC_AUTH_ENDPOINT + "/send-magic-link",
			{
				method: "POST",
				body: JSON.stringify(formData),
				headers,
				credentials: "include",
			},
		);

		const { error, message } = await res.json();

		if (error) throw new Error(error);
		return { message };
	} catch (error) {
		generateErrorLog("@siginController", error);
	}
}
