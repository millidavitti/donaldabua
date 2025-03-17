import {
	APIResponse,
	Project,
	ProjectData,
} from "@/data/home/home-atoms/home-data";
import { generateCsrfToken } from "@/backend/auth/get-csrf-token.controller";

export async function updateProjectController(
	projectId: string,
	update: ProjectData,
) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);

		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + projectId,
			{
				method: "PUT",
				body: JSON.stringify(update),
				headers,
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<Project, "update">;
	} catch (error) {
		console.error("---updateProjectController---\n", error);
		throw error;
	}
}
