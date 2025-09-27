import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Project } from "@/data/dashboard/dashboard-atoms/types";
import { useProjectEdit } from "@/hooks/interface/dashboard/use-project-edit.interface";
import { Edit } from "lucide-react";
import React from "react";

interface ProjectEdit {
	project: Project;
}
export default function ProjectEdit({ project }: ProjectEdit) {
	const { edit } = useProjectEdit();

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
