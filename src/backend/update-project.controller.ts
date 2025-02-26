"use server";
import { APIResponse, Project, ProjectData } from "@/data/atoms/app_data";

export async function updateProjectController(
	projectId: string,
	update: ProjectData,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + projectId,
			{
				method: "PUT",
				body: JSON.stringify(update),
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<Project, "update">;
	} catch (error) {
		console.log("---updateProjectController---\n", error);
		throw error;
	}
}
