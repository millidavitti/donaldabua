import { APIResponse, Technology } from "@/data/home/home-atoms/home-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "../../../auth/get-csrf-token.controller";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";

export async function getProjectTechnologiesController(projectId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const res = await fetch(ENDPOINTS.projectTechnologies.list(projectId), {
			credentials: "include",
			headers,
		});
		const data = await res.json();

		return data as APIResponse<Technology[], "projectTechnologies">;
	} catch (error) {
		console.error("---getProjectTechnologiesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
