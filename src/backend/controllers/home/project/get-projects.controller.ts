import { APIResponse, Project } from "@/data/home/home-atoms/home-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getProjectsController(profileId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const res = await fetch(ENDPOINTS.project.list(profileId), {
			credentials: "include",
			headers,
		});
		const data = await res.json();

		return data as APIResponse<Project[], "projects">;
	} catch (error) {
		console.error("---getProjectsController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
