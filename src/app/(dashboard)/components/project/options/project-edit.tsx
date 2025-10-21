import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Project } from "@/data/dashboard/dashboard-atoms/types";
import { DELAY } from "@/data/dashboard/dashboard-constants";
import { useEditProjects } from "@/hooks/interface/dashboard/use-edit-projects.interface";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { Edit } from "lucide-react";

interface ProjectEdit {
	project: Project;
}
export default function ProjectEdit({ project }: ProjectEdit) {
	const { edit } = useEditProjects();

	return (
		<>
			<InteractiveIcon
				className={cn("border-none p-3 flex", getAnimationClass("slide-left"))}
				style={{ animationDelay: 1 * DELAY + "ms" }}
				onClick={() => edit(project)}
			>
				<Edit className='group-hover:stroke-[#006494]' />
			</InteractiveIcon>
		</>
	);
}
