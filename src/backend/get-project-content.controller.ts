import { APIResponse, ProjectContent } from "@/data/atoms/app_data";
import { generateCsrfToken } from "./auth/get-csrf-token.controller";

export async function getProjectContentController(projectId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-content/" +
				projectId,
			{
				credentials: "include",
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<ProjectContent, "projectContent">;
	} catch (error) {
		console.error("---getProjectContentController---\n", error);
		throw error;
	}
}
