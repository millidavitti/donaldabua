import {
	APIResponse,
	Technology,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { getErrorMessage } from "@/utils/get-error-message";

export async function getTechnologiesController() {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/technologies/",
			{ credentials: "include" },
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "technologies">;
	} catch (error) {
		console.error("---getTechnologies---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
