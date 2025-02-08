import InteractiveIcon from "@/components/layouts/interactive_icon";
import { PortfolioProjectData } from "@/data/atoms/app_data";
import usePublishedPortfolioProjectEditOptionInterface from "@/hooks/interface/use-published-portfolio-project-edit-option-interface";
import { Edit } from "lucide-react";
import React from "react";

interface PublishedPortfolioProjectEditOption {
	project: PortfolioProjectData;
}
export default function PublishedPortfolioProjectEditOption({
	project,
}: PublishedPortfolioProjectEditOption) {
	const { edit } = usePublishedPortfolioProjectEditOptionInterface();

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
