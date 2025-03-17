import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { Project } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import PublishedProjectOptions from "./published-project-options";
import PublishedProjectEditOption from "./options/published-project-edit-option";
import PublishedProjectDeleteOption from "./options/published-project-delete-option";
import usePublishedProjectInterface from "@/hooks/interface/dashboard/use-published-project-interface";
import { DELAY } from "@/data/dashboard/dashboard-constants";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";

interface PublishedProject {
	project: Project;
	index: number;
}
export default function PublishedProject({ project, index }: PublishedProject) {
	const { viewProject } = usePublishedProjectInterface();

	return (
		<Flex
			className={cn(
				"shrink-0 gap-3 grow w-full md:basis-52 relative",
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
						viewProject(project);
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
				<PublishedProjectEditOption project={project} />
				<PublishedProjectDeleteOption projectID={project.id} />
			</PublishedProjectOptions>
		</Flex>
	);
}
