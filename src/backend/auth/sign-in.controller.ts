import { getErrorMessage } from "@/utils/get-error-message";

export async function signInController(formData: { email: string }) {
	try {
		const headers = new Headers();
		headers.append("Content-type", "application/json");
		const res = await fetch(
			process.env.NEXT_PUBLIC_AUTH_ENDPOINT + "/magic-link/",
			{
				method: "POST",
				body: JSON.stringify(formData),
				headers,
				credentials: "include",
			},
		);

		const { error, status } = await res.json();

		if (error) throw new Error(error);
		return { status };
	} catch (error) {
		console.log("---signInController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
