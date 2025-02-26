"use server";
import { APIResponse } from "@/data/atoms/app_data";

export async function updateProjectTechnologiesController(
	projectId: string,
	projectTechnologies: string[],
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-technologies/" +
				projectId,
			{
				method: "PUT",
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
