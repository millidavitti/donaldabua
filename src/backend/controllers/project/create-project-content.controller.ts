import { APIResponse, ProjectContent } from "@/data/atoms/app_data";
import { generateCsrfToken } from "../../auth/get-csrf-token.controller";

export async function createProjectContentController(
	projectId: string,
	projectContent: ProjectContent,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-content/" +
				projectId,
			{
				method: "POST",
				body: JSON.stringify(projectContent),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<ProjectContent, "projectContent">;
	} catch (error) {
		console.error("---createProjectContentController---\n", error);
		throw error;
	}
}
