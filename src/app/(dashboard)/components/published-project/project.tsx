import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { type Project } from "@/data/dashboard/dashboard-atoms/types";
import PublishedProjectOptions from "./published-project-options";
import ProjectEdit from "./options/project-edit";
import PublishedProjectDeleteOption from "./options/published-project-delete-option";
import useProject from "@/hooks/interface/dashboard/use-project.interface";
import { DELAY } from "@/data/dashboard/dashboard-constants";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";

export default function Project({
	project,
	index,
}: {
	project: Project;
	index: number;
}) {
	const { view, Modal } = useProject();

	return (
		<>
			{Modal}
			<Flex
				className={cn(
					"shrink-0 gap-3 grow w-full md:basis-52 relative border-0 p-0",
					getAnimationClass("swing-in-top-fwd"),
				)}
				htmlProps={{
					style: { animationDelay: index * DELAY + "ms" },
				}}
			>
				{/* Project */}
				<Flex
					flex='column'
					className='gap-3 grow md:basis-52 cursor-pointer active:scale-[.98] transition'
					htmlProps={{
						onClick() {
							view(project);
						},
					}}
				>
					<Flex className='w-full h-40 shrink-0'>
						<Image
							src={project.thumbnail}
							width={1000}
							height={1000}
							alt='portfolio-project-thumbnail'
							className='object-cover'
						/>
					</Flex>
					<p className='text-lg font-semibold'>{project.title}</p>
				</Flex>
				<PublishedProjectOptions>
					<ProjectEdit project={project} />
					<PublishedProjectDeleteOption projectID={project.id} />
				</PublishedProjectOptions>
			</Flex>
		</>
	);
}
