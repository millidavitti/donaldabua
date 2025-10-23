import { Project } from "@/data/dashboard/dashboard-atoms/types";
import { useAtom } from "jotai";
import {
	project_atom,
	project_content_atom,
	project_technologies_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import Modal from "@/components/layouts/modal";
import ProjectContent from "@/app/(dashboard)/components/project/project-content";
import ProjectDescription from "@/app/(dashboard)/components/project/project-description";
import ProjectTechnologies from "@/app/(dashboard)/components/project/project-technologies";
import ProjectThumbnail from "@/app/(dashboard)/components/project/project-thumbnail";
import ProjectTitle from "@/app/(dashboard)/components/project/project-title";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import { HashLoader } from "react-spinners";
import { useState } from "react";
import ProjectDeployment from "@/app/(dashboard)/components/project/project-deployment";
import ProjectRepository from "@/app/(dashboard)/components/project/project-repository";

export default function useProject() {
	const [project_technologies] = useAtom(project_technologies_atom);
	const [project_content] = useAtom(project_content_atom);
	const [project, set_project] = useAtom(project_atom);
	const [context, setContext] = useState<"view-project" | null>(null);
	const isProjectReady =
		project &&
		!(project_technologies.isFetching || project_content.isFetching) &&
		project_technologies.isSuccess &&
		project_content.isSuccess;

	const view = async (project: Project) => {
		setContext("view-project");
		set_project(project);
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const close = () => {
		setContext(null);
		set_project(null);
		document.onkeydown = null;
	};
	return {
		view,
		Modal: context && (
			<Modal close={close}>
				{isProjectReady && (
					<Flex
						flex='column'
						className='bg-light-surface gap-3 w-full max-h-[95%] neonScan border-0'
					>
						<Flex className='items-center justify-between p-0 border-0 shrink-0'>
							<InteractiveIcon callback={close}>
								<ArrowLeftIcon size={24} />
							</InteractiveIcon>
						</Flex>

						<Flex flex='column' className='gap-3'>
							<ProjectTitle title={project.title} />
							<Flex className='flex-wrap gap-3 p-0 border-0'>
								<Flex flex='column' className='grow gap-3 basis-[360px]'>
									<ProjectDescription description={project.description} />
									<ProjectTechnologies
										technologies={project_technologies.data}
									/>
									<ProjectThumbnail thumbnail={project.thumbnail} />
									<ProjectDeployment deployment={project.deployment} />
									<ProjectRepository repository={project.repository} />
								</Flex>
								<ProjectContent content={project_content.data} />
							</Flex>
						</Flex>
					</Flex>
				)}
				{isProjectReady || <HashLoader size={48} color='#fff' />}
			</Modal>
		),
	};
}
