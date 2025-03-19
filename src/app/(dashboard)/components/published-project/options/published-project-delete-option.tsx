import InteractiveIcon from "@/components/layouts/interactive_icon";
import usePublishedProjectDeleteOption from "@/hooks/interface/dashboard/use-published-project-delete-option";
import { Trash2 } from "lucide-react";

interface PublishedProjectDeleteOption {
	projectID: string;
}
export default function PublishedProjectDeleteOption({
	projectID,
}: PublishedProjectDeleteOption) {
	const { deleteProject } = usePublishedProjectDeleteOption();
	return (
		<>
			<InteractiveIcon
				className='border grow flex place-content-center'
				htmlProps={{
					onClick() {
						deleteProject(projectID);
					},
				}}
			>
				<Trash2 className='stroke-light-error' />
			</InteractiveIcon>
		</>
	);
}
