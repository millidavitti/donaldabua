import Button from "@/components/ui/button";
import { usePublishProjectInterface } from "@/hooks/interface/use-publish-project-interface";
import React from "react";
import { HashLoader } from "react-spinners";

export default function PublishProject() {
	const { publishProject, edit_profile, savePublishedProjectEdit, api_task } =
		usePublishProjectInterface();
	return (
		<Button
			type='button'
			className='bg-black text-light-surface'
			onClick={() =>
				edit_profile === "edit-published-project"
					? savePublishedProjectEdit()
					: publishProject()
			}
		>
			{edit_profile === "edit-published-project" ? "Save" : "Publish"}
			{(api_task === "publish-project" ||
				api_task === "save-published-project-edit") && (
				<HashLoader color='#ffffff' size={24} />
			)}
		</Button>
	);
}
