import InteractiveIcon from "@/components/layouts/interactive_icon";
import AlertDialog from "@/components/ui/alert-dialog";
import usePublishedProjectDeleteOption from "@/hooks/interface/use-published-project-delete-option";
import { Trash } from "lucide-react";
import React from "react";

interface PublishedProjectDeleteOption {
	projectID: string;
}
export default function PublishedProjectDeleteOption({
	projectID,
}: PublishedProjectDeleteOption) {
	const { deleteProject, api_task } = usePublishedProjectDeleteOption();
	return (
		<>
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
		</>
	);
}
