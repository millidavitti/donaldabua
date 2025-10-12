import { Project } from "@/data/dashboard/dashboard-atoms/types";
import { projects_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtom } from "jotai";

export default function useProjects() {
	const [projects] = useAtom(projects_atom);
	return {
		projects: projects.data as Project[],
		isFetching: projects.isFetching,
	};
}
