import {
	APIResponse,
	Technology,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function getProjectTechnologiesController(projectId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT +
				"/project-technologies/" +
				projectId,
			{
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "projectTechnologies">;
	} catch (error) {
		console.error("---getProjectTechnologiesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
