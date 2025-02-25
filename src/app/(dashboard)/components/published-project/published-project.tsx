import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { Project } from "@/data/atoms/app_data";
import PublishedProjectOptions from "./published-project-options";
import PublishedProjectEditOption from "./options/published-project-edit-option";
import PublishedProjectDeleteOption from "./options/published-project-delete-option";
import usePublishedProjectInterface from "@/hooks/interface/use-published-project-interface";

interface PublishedProject {
	project: Project;
}
export default function PublishedProject({ project }: PublishedProject) {
	const { viewProject } = usePublishedProjectInterface();

	return (
		<>
			<Flex className='shrink-0 gap-3 grow w-full md:basis-52 relative'>
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
							className='neonScan object-cover'
						/>
					</Flex>
					<p className='text-lg font-semibold'>{project.title}</p>
				</Flex>
				<PublishedProjectOptions>
					<PublishedProjectEditOption project={project} />
					<PublishedProjectDeleteOption projectID={project.id} />
				</PublishedProjectOptions>
			</Flex>
		</>
	);
}
