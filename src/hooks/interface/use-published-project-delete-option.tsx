import { deleteProjectController } from "@/backend/delete-project.controller";
import { projects_jotai } from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

export default function usePublishedProjectDeleteOption() {
	const projects_setter = useSetAtom(projects_jotai);

	async function deleteProject(projectID: string) {
		try {
			const { error } = await deleteProjectController(projectID);
			if (error) throw error;
			else
				projects_setter((projects) => {
					return projects.filter((project) => project.id !== projectID);
				});
		} catch (error) {
			console.log("---deleteProject---\n", error);
			toast.info("Unable to delete project. Please try again.");
		}
	}
	return { deleteProject };
}
