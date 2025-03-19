import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Project } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { usePublishedProjectEditOptionInterface } from "@/hooks/interface/dashboard/use-published-project-edit-option-interface";
import { Edit } from "lucide-react";
import React from "react";

interface PublishedProjectEditOption {
	project: Project;
}
export default function PublishedProjectEditOption({
	project,
}: PublishedProjectEditOption) {
	const { editProject } = usePublishedProjectEditOptionInterface();

	return (
		<InteractiveIcon
			className='border grow flex place-content-center'
			htmlProps={{
				onClick() {
					editProject(project);
				},
			}}
		>
			<Edit />
		</InteractiveIcon>
	);
}
