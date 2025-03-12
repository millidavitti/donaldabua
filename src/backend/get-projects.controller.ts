import { APIResponse, Project } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";

export async function getProjectsController(profileId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + profileId,
			{
				credentials: "include",
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<Project[], "projects">;
	} catch (error) {
		console.log("---getProjectsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
