import { APIResponse, Project } from "@/data/atoms/app_data";

export async function deleteProjectController(projectId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + projectId,
			{
				method: "DELETE",
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<Project, "project">;
	} catch (error) {
		console.log("---deleteProjectController---\n", error);
		throw error;
	}
}
