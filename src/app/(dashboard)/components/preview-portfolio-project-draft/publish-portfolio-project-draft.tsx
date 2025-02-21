import Button from "@/components/ui/button";
import usePublishPortfolioProjectInterface from "@/hooks/interface/use-publish-portfolio-project-interface";
import React from "react";

export default function PublishProject() {
	const {
		publishPortfolioProject,
		editProfileState,
		savePublishedPortfolioProjectEdit,
	} = usePublishPortfolioProjectInterface();
	return (
		<Button
			type='button'
			className='bg-black text-light-surface'
			onClick={() =>
				editProfileState === "edit-published-portfolio-project"
					? savePublishedPortfolioProjectEdit()
					: publishPortfolioProject()
			}
		>
			{editProfileState === "edit-published-portfolio-project"
				? "Save"
				: "Publish"}
		</Button>
	);
}
