import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { APIResponse, Technology } from "@/data/types";
import { getErrorMessage } from "@/utils/get-error-message";

export async function getTechnologiesController() {
	try {
		const res = await fetch(ENDPOINTS.technologies.read(), {
			credentials: "include",
		});
		const data = await res.json();

		return data as APIResponse<Technology[], "technologies">;
	} catch (error) {
		console.error("---getTechnologies---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
