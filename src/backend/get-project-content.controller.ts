"use server";
import { APIResponse, ProjectContent } from "@/data/atoms/app_data";

export async function getProjectContentController(projectId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-content/" +
				projectId,
		);
		const data = await res.json();

		return data as APIResponse<ProjectContent, "projectContent">;
	} catch (error) {
		console.log("---getProjectContentController---\n", error);
		throw error;
	}
}
