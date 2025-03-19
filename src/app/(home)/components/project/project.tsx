import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { type Project } from "@/data/home/home-atoms/home-data";
import usePublishedProjectInterface from "@/hooks/interface/home/use-published-project-interface";
import { DELAY } from "@/data/home/home-constants";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";

interface IProject {
	project: Project;
	index: number;
}
export default function Project({ project, index }: IProject) {
	const { viewProject } = usePublishedProjectInterface();

	return (
		<Flex
			flex='column'
			className={cn(
				"shrink-0 gap-3 grow md:basis-52 cursor-pointer transition active:scale-[0.98]",
				getAnimationClass("swing-in-top-fwd"),
			)}
			htmlProps={{
				style: { animationDelay: index * DELAY + "ms" },
				onClick() {
					viewProject(project);
				},
			}}
		>
			<Flex className='w-full h-40 shrink-0 p-0'>
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
	);
}
