import { Project } from "@/data/atoms/app_data";

export async function getProjects(profileId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/projects/" + profileId,
		);
		const { projects } = await res.json();

		return projects as Project[];
	} catch (error) {
		console.log("---getProjects---\n", error);
		return [];
	}
}
