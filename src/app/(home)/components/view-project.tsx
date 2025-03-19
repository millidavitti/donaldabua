import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import ProjectTitle from "./project/project-title";
import ProjectDescription from "./project/project-description";
import ProjectContent from "./project/project-content";
import { Project } from "@/data/home/home-atoms/home-data";
import ProjectTechnologies from "./project/project-technologies";
import ProjectThumbnail from "./project/project-thumbnail";
import { vault_view_jotai } from "@/data/home/home-atoms/home-ui-state";
import { useSetAtom } from "jotai";

interface ViewProject {
	project: Project;
}
export default function ViewProject({ project }: ViewProject) {
	const vault_view_setter = useSetAtom(vault_view_jotai);

	return (
		<Flex
			flex='column'
			className='bg-light-surface w-full max-h-[95%] neonScan'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0 border-0'>
				<InteractiveIcon
					htmlProps={{
						onClick() {
							vault_view_setter(null);
						},
					}}
				>
					<ArrowLeftIcon size={24} />
				</InteractiveIcon>
			</Flex>

			<Flex flex='column' className='gap-3 border-0'>
				{/* Project Title */}
				<ProjectTitle title={project.title} />

				<Flex className='flex-wrap border-0 p-0 gap-3'>
					<Flex flex='column' className='grow gap-3 basis-[360px] self-start'>
						<ProjectDescription description={project.description} />
						<ProjectTechnologies />
						<ProjectThumbnail thumbnail={project.thumbnail} />
					</Flex>
					<ProjectContent />
				</Flex>
			</Flex>
		</Flex>
	);
}
