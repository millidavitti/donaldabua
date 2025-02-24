import { APIResponse, Technology } from "@/data/atoms/app_data";

export async function getTechnologiesController() {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/technologies/",
		);
		const data = await res.json();

		return data as APIResponse<Technology[], "technologies">;
	} catch (error) {
		console.log("---getTechnologies---\n", error);
		return { error };
	}
}
