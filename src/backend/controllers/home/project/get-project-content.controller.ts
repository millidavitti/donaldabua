import { APIResponse, ProjectContent } from "@/data/home/home-atoms/home-data";
import { generateCsrfToken } from "../../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getProjectContentController(projectId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.projectContent.list(projectId), {
			credentials: "include",
			headers,
		});
		const data = await res.json();

		return data as APIResponse<ProjectContent, "projectContent">;
	} catch (error) {
		console.error("---getProjectContentController---\n", error);
		throw error;
	}
}
