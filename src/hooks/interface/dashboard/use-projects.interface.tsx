import { Project } from "@/data/dashboard/dashboard-atoms/types";
import { projects_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtom } from "jotai";

export default function useProjects() {
	const [projects] = useAtom(projects_atom);

	const hasProject = projects.data.length === 1;
	const hasProjects = projects.data.length > 1;
	const isEmpty = projects.data.length < 1;
	return {
		projects: projects.data as Project[],
		isFetching: projects.isFetching,
		hasProject,
		hasProjects,
		isEmpty,
	};
}
