import InteractiveIcon from "@/components/layouts/interactive_icon";
import usePublishedPortfolioProjectDeleteOption from "@/hooks/interface/use-published-portfolio-project-delete-option";
import { Trash } from "lucide-react";
import React from "react";

interface PublishedProjectDeleteOption {
	projectID: string;
}
export default function PublishedProjectDeleteOption({
	projectID,
}: PublishedProjectDeleteOption) {
	const { deleteProject } = usePublishedPortfolioProjectDeleteOption();
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {
					deleteProject(projectID);
				},
			}}
		>
			<Trash />
		</InteractiveIcon>
	);
}
