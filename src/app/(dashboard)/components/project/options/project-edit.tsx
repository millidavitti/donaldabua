import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Project } from "@/data/types";
import { DELAY } from "@/data/constants";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { Edit } from "lucide-react";
import { usePortfolio } from "../../profile/interfaces/use-portfolio.interface";
import { createId } from "@paralleldrive/cuid2";

interface ProjectEdit {
	project: Project;
}
export default function ProjectEdit({ project }: ProjectEdit) {
	const { edit } = usePortfolio();

	return (
		<>
			<InteractiveIcon
				id={createId()}
				className={cn("border-none p-3 flex", getAnimationClass("slide-left"))}
				style={{ animationDelay: 1 * DELAY + "ms" }}
				onClick={() => edit(project)}
			>
				<Edit className='group-hover:stroke-[#006494] pointer-events-none' />
			</InteractiveIcon>
		</>
	);
}
