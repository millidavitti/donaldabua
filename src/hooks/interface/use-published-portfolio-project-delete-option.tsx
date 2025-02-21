import { projects_jotai } from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";

export default function usePublishedProjectDeleteOption() {
	const projects_setter = useSetAtom(projects_jotai);
	function deleteProject(projectID: string) {
		projects_setter((projects) => {
			return projects.filter((project) => project.id !== projectID);
		});
	}
	return { deleteProject };
}
