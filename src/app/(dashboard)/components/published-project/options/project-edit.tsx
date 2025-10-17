import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Project } from "@/data/dashboard/dashboard-atoms/types";
import { useEditProjects } from "@/hooks/interface/dashboard/use-edit-projects.interface";
import { Edit } from "lucide-react";

interface ProjectEdit {
	project: Project;
}
export default function ProjectEdit({ project }: ProjectEdit) {
	const { edit } = useEditProjects();

	return (
		<>
			<InteractiveIcon
				className='border grow flex place-content-center'
				htmlProps={{
					onClick() {
						edit(project);
					},
				}}
			>
				<Edit />
			</InteractiveIcon>
		</>
	);
}
