"use server";
import { APIResponse, Project } from "@/data/atoms/app_data";

export async function createProjectController(
	profileId: string,
	project: Project,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + profileId,
			{
				method: "POST",
				body: JSON.stringify(project),
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<Project, "project">;
	} catch (error) {
		console.log("---createProjectController---\n", error);
		throw error;
	}
}
