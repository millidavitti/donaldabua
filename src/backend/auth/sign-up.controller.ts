import { getErrorMessage } from "@/utils/get-error-message";

export async function signUpController(credentials: {
	email: string;
	name: string;
}) {
	try {
		const headers = new Headers();
		headers.append("Content-type", "application/json");
		const res = await fetch(
			process.env.NEXT_PUBLIC_AUTH_ENDPOINT + "/sign-up",
			{
				method: "POST",
				body: JSON.stringify(credentials),
				headers,
				credentials: "include",
			},
		);

		const json = await res.json();

		return json;
	} catch (error) {
		console.error("---signUpController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
