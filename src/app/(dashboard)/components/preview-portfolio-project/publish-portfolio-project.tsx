import Button from "@/components/ui/button";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import { mock_portfolio_projects_jotai } from "@/data/mock";
import usePublishPortfolioProjectInterface from "@/hooks/interface/use-publish-portfolio-project-interface";
import { useAtom, useSetAtom } from "jotai";
import React from "react";

export default function PublishPortfolioProject() {
	const { publishPortfolioProject } = usePublishPortfolioProjectInterface();
	return (
		<Button
			type='button'
			className='bg-black text-light-surface'
			onClick={() => publishPortfolioProject()}
		>
			Publish
		</Button>
	);
}
