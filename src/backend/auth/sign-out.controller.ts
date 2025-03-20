import { getErrorMessage } from "@/utils/get-error-message";

export async function signOut() {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_AUTH_ENDPOINT + "/sign-out",
			{
				method: "GET",
				credentials: "include",
			},
		);
		const { error, isAuthenticated } = await res.json();
		console.log({ error, isAuthenticated });
		if (error) throw new Error(error);
		else if (isAuthenticated) return { isAuthenticated };
	} catch (error) {
		console.error("---signOut---", error);
		throw new Error(getErrorMessage(error));
	}
}
