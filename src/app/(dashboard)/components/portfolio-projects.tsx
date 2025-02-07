import Flex from "@/components/layouts/flex";
import React from "react";
import PortfolioProject from "./portfolio-project";
import { mock_portfolio_projects_jotai } from "@/data/mock";
import { useAtomValue } from "jotai";
import Overlay from "@/components/layouts/overlay";
import ViewPortfolioProject from "./view-portfolio-project";

export default function PortfolioProjects() {
	const mock_portfolio_projects = useAtomValue(mock_portfolio_projects_jotai);
	return (
		<>
			<Flex className='flex-wrap gap-3 max-h-[484px]'>
				{mock_portfolio_projects.map((project) => {
					return <PortfolioProject key={project.id} project={project} />;
				})}
			</Flex>
		</>
	);
}
