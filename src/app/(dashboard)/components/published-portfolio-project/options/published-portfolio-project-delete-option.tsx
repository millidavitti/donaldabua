import InteractiveIcon from "@/components/layouts/interactive_icon";
import usePublishedPortfolioProjectDeleteOption from "@/hooks/interface/use-published-portfolio-project-delete-option";
import { Trash } from "lucide-react";
import React from "react";

interface PublishedPortfolioProjectDeleteOption {
	projectID: string;
}
export default function PublishedPortfolioProjectDeleteOption({
	projectID,
}: PublishedPortfolioProjectDeleteOption) {
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
