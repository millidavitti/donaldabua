import { APIResponse, Technology } from "@/data/atoms/app_data";

export async function getProjectTechnologiesController(projectId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-technologies/" +
				projectId,
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "projectTechnologies">;
	} catch (error) {
		console.log("---getProjectTechnologiesController---\n", error);
		throw error;
	}
}
