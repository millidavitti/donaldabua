import {
	APIResponse,
	Project,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { generateCsrfToken } from "@/backend/auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function deleteProjectController(projectId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const res = await fetch(ENDPOINTS.project.delete(projectId), {
			method: "DELETE",
			credentials: "include",
			headers,
		});
		const data = await res.json();

		return data as APIResponse<Project, "project">;
	} catch (error) {
		console.error("---deleteProjectController---\n", error);
		throw error;
	}
}
