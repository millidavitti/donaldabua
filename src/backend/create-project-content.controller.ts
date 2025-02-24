"use server";
import { APIResponse, ProjectContent } from "@/data/atoms/app_data";

export async function createProjectContentController(
	projectId: string,
	projectContent: ProjectContent,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-content/" +
				projectId,
			{
				method: "POST",
				body: JSON.stringify(projectContent),
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<ProjectContent, "projectContent">;
	} catch (error) {
		console.log("---createProjectContentController---\n", error);
		throw error;
	}
}
