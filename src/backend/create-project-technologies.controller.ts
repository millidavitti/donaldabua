"use server";
import { APIResponse, ProjectTechnology } from "@/data/atoms/app_data";

export async function createProjectTechnologiesController(
	projectTechnologies: ProjectTechnology[],
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/project-technologies/",
			{
				method: "POST",
				body: JSON.stringify(projectTechnologies),
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<unknown, "info">;
	} catch (error) {
		console.log("---createProjectTechnologiesController---\n", error);
		throw error;
	}
}
