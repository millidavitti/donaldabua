import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Project } from "@/data/atoms/app_data";
import { usePublishedProjectEditOptionInterface } from "@/hooks/interface/use-published-project-edit-option-interface";
import { Edit } from "lucide-react";
import React from "react";

interface PublishedProjectEditOption {
	project: Project;
}
export default function PublishedProjectEditOption({
	project,
}: PublishedProjectEditOption) {
	const { edit } = usePublishedProjectEditOptionInterface();

	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {
					edit(project);
				},
			}}
		>
			<Edit />
		</InteractiveIcon>
	);
}
