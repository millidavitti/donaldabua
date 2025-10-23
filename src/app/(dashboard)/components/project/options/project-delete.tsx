import InteractiveIcon from "@/components/layouts/interactive_icon";
import { DELAY } from "@/data/dashboard/dashboard-constants";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { Trash2 } from "lucide-react";
import useProjectDelete from "../interfaces/use-project-delete";

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
				className={cn(
					"border-none p-3 flex place-content-center group-hover:border-yellow-700",
					getAnimationClass("slide-left"),
				)}
				style={{ animationDelay: 0 * DELAY + "ms" }}
				onClick={() => deleteProject(projectID)}
			>
				<Trash2 className='stroke-light-error' />
			</InteractiveIcon>
		</>
	);
}
