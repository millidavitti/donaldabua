import {
	APIResponse,
	Project,
	ProjectData,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { generateCsrfToken } from "@/backend/auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function createProjectController(
	profileId: string,
	projectData: ProjectData,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(ENDPOINTS.project.create(profileId), {
			method: "POST",
			body: JSON.stringify(projectData),
			headers,
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<Project, "project">;
	} catch (error) {
		console.error("---createProjectController---\n", error);
		throw error;
	}
}
