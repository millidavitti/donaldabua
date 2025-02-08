import Flex from "@/components/layouts/flex";
import React from "react";
import PortfolioProject from "./portfolio-project";
import { mock_portfolio_projects_jotai } from "@/data/mock";
import { useAtomValue } from "jotai";
import Overlay from "@/components/layouts/overlay";
import ViewPortfolioProject from "./view-portfolio-project";
import { selected_portfolio_project_jotai } from "@/data/atoms/app_data";

export default function PortfolioProjects() {
	const mock_portfolio_projects = useAtomValue(mock_portfolio_projects_jotai);
	const selected_portfolio_project = useAtomValue(
		selected_portfolio_project_jotai,
	);

	return (
		<>
			<Flex className='flex-wrap gap-3 max-h-[484px]'>
				{mock_portfolio_projects.map((project) => {
					return <PortfolioProject key={project.id} project={project} />;
				})}
			</Flex>
			<Overlay
				stateFlag='view-portfolio-project'
				className='place-content-center'
			>
				<ViewPortfolioProject project={selected_portfolio_project!} />
			</Overlay>
		</>
	);
}
