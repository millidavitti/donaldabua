import { APIResponse, Project } from "@/data/home/home-atoms/home-data";
import { generateCsrfToken } from "../../../auth/get-csrf-token.controller";

export async function deleteProjectController(projectId: string) {
	const headers = new Headers();

	try {
		const { error, csrfToken } = await generateCsrfToken();
		if (error) throw new Error(error);
		else if (csrfToken) headers.append("x-csrf-token", csrfToken);
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + projectId,
			{
				method: "DELETE",
				credentials: "include",
				headers,
			},
		);
		const data = await res.json();

		return data as APIResponse<Project, "project">;
	} catch (error) {
		console.error("---deleteProjectController---\n", error);
		throw error;
	}
}
