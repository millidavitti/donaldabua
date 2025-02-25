import { APIResponse, Project } from "@/data/atoms/app_data";

export async function getProjectsController(profileId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + profileId,
		);
		const data = await res.json();

		return data as APIResponse<Project[], "projects">;
	} catch (error) {
		console.log("---getProjectsController---\n", error);
		throw error;
	}
}
