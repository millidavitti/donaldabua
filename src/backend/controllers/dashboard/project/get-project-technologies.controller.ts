import {
	APIResponse,
	Technology,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";
import { generateCsrfToken } from "@/backend/auth/get-csrf-token.controller";

export async function getProjectTechnologiesController(projectId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-technologies/" +
				projectId,
			{
				credentials: "include",
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "projectTechnologies">;
	} catch (error) {
		console.error("---getProjectTechnologiesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
