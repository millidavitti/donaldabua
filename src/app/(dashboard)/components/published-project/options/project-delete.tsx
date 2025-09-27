import InteractiveIcon from "@/components/layouts/interactive_icon";
import useProjectDelete from "@/hooks/interface/dashboard/use-project-delete";
import { Trash2 } from "lucide-react";

interface PublishedProjectDeleteOption {
	projectID: string;
}
export default function ProjectDelete({
	projectID,
}: PublishedProjectDeleteOption) {
	const { deleteProject } = useProjectDelete();
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
