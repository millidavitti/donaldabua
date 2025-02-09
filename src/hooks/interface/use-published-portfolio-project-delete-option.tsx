import { mock_portfolio_projects_jotai } from "@/data/mock";
import { useSetAtom } from "jotai";

export default function usePublishedPortfolioProjectDeleteOption() {
	const mock_portfolio_projects_setter = useSetAtom(
		mock_portfolio_projects_jotai,
	);
	function deleteProject(projectID: string) {
		mock_portfolio_projects_setter((projects) => {
			return projects.filter((project) => project.id !== projectID);
		});
	}
	return { deleteProject };
}
