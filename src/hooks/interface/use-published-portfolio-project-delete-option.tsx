import { portfolio_projects_jotai } from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";

export default function usePublishedPortfolioProjectDeleteOption() {
	const portfolio_projects_setter = useSetAtom(portfolio_projects_jotai);
	function deleteProject(projectID: string) {
		portfolio_projects_setter((projects) => {
			return projects.filter((project) => project.id !== projectID);
		});
	}
	return { deleteProject };
}
