import Button from "@/components/ui/button";
import usePublishProjectInterface from "@/hooks/interface/use-publish-portfolio-project-interface";
import React from "react";

export default function PublishProject() {
	const { publishProject, editProfileState, savePublishedProjectEdit } =
		usePublishProjectInterface();
	return (
		<Button
			type='button'
			className='bg-black text-light-surface'
			onClick={() =>
				editProfileState === "edit-published-project"
					? savePublishedProjectEdit()
					: publishProject()
			}
		>
			{editProfileState === "edit-published-project" ? "Save" : "Publish"}
		</Button>
	);
}
