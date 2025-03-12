import { APIResponse, Technology } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";

export async function updateTechnologiesController(technologies: Technology[]) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/technologies/",
			{
				method: "POST",
				body: JSON.stringify(technologies),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "technologies">;
	} catch (error) {
		console.log("---createTechnologiesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
