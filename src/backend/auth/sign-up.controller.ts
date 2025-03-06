import { getErrorMessage } from "@/utils/get-error-message";

export async function signUpController(formData: FormData) {
	try {
		const headers = new Headers();
		headers.append("Content-type", "application/json");
		const res = await fetch(
			process.env.NEXT_PUBLIC_AUTH_ENDPOINT + "/sign-up/",
			{
				method: "POST",
				body: JSON.stringify(Object.fromEntries(formData.entries())),
				headers,
				credentials: "include",
			},
		);

		const { error } = await res.json();

		if (error) throw new Error(error);
	} catch (error) {
		console.log("---signUpController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
