import {
	APIResponse,
	ProjectContent,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";

export async function getProjectContentController(projectId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-content/" +
				projectId,
			{
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<ProjectContent, "projectContent">;
	} catch (error) {
		console.error("---getProjectContentController---\n", error);
		throw error;
	}
}
