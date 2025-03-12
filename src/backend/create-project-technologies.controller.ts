import { APIResponse, ProjectTechnology } from "@/data/atoms/app_data";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";

export async function createProjectTechnologiesController(
	projectTechnologies: ProjectTechnology[],
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/project-technologies/",
			{
				method: "POST",
				body: JSON.stringify(projectTechnologies),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<unknown, "info">;
	} catch (error) {
		console.error("---createProjectTechnologiesController---\n", error);
		throw error;
	}
}
