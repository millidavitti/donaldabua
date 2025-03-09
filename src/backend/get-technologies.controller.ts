import { APIResponse, Technology } from "@/data/atoms/app_data";
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
		console.log("---getTechnologies---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
