"use server";
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
			},
		);

		const { error } = await res.json();
		if (error) throw error;
	} catch (error) {
		console.log("---Sign Up---\n", error);
		throw error;
	}
}
