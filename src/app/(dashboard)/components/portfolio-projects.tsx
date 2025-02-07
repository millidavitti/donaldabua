import Flex from "@/components/layouts/flex";
import React from "react";
import PortfolioProject from "./portfolio-project";
import { mock_portfolio_projects_jotai } from "@/data/mock";
import { useAtomValue } from "jotai";

export default function PortfolioProjects() {
	const mock_portfolio_projects = useAtomValue(mock_portfolio_projects_jotai);
	return (
		<Flex className='flex-wrap gap-3 max-h-[484px]'>
			{mock_portfolio_projects.map((project) => {
				return (
					<PortfolioProject
						key={project.id}
						thumbnail={project.thumbnail}
						title={project.title}
					/>
				);
			})}
		</Flex>
	);
}
