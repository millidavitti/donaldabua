import Button from "@/components/ui/button";
import usePublishPortfolioProjectInterface from "@/hooks/interface/use-publish-portfolio-project-interface";
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
