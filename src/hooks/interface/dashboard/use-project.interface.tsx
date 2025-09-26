import { Project } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtom } from "jotai";
import {
	project_atom,
	project_content_atom,
	project_technologies_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import Modal from "@/components/layouts/modal";
import PublishedProjectContent from "@/app/(dashboard)/components/published-project/published-project-content";
import PublishedProjectDescription from "@/app/(dashboard)/components/published-project/published-project-description";
import PublishedProjectTechnologies from "@/app/(dashboard)/components/published-project/published-project-tech-stack";
import PublishedProjectThumbnail from "@/app/(dashboard)/components/published-project/published-project-thumbnail";
import PublishedProjectTitle from "@/app/(dashboard)/components/published-project/published-project-title";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ArrowLeftIcon } from "lucide-react";
import { HashLoader } from "react-spinners";
import { useState } from "react";

export default function useProject() {
	const [project_technologies] = useAtom(project_technologies_atom);
	const [project_content] = useAtom(project_content_atom);
	const [project, set_project] = useAtom(project_atom);
	const [context, setContext] = useState<"view-project" | null>(null);

	const view = async (project: Project) => {
		setContext("view-project");
		set_project(project);
	};

	const close = () => {
		setContext(null);
		set_project(null);
	};
	return {
		view,
		Modal: context && (
			<Modal close={close}>
				{project &&
					project_technologies.isSuccess &&
					project_content.isSuccess && (
						<Flex
							flex='column'
							className='bg-light-surface gap-3 w-full max-h-[95%] neonScan border-0'
						>
							{/* Header */}
							<Flex className='justify-between items-center shrink-0 border-0 p-0'>
								<InteractiveIcon callback={close}>
									<ArrowLeftIcon size={24} />
								</InteractiveIcon>
							</Flex>

							<Flex flex='column' className='gap-3'>
								{/* Project Title */}
								<PublishedProjectTitle title={project.title} />

								<Flex className='gap-3 flex-wrap border-0 p-0'>
									<Flex flex='column' className='grow gap-3 basis-[360px]'>
										<PublishedProjectDescription
											description={project.description}
										/>
										<PublishedProjectTechnologies
											technologies={project_technologies.data}
										/>
										<PublishedProjectThumbnail thumbnail={project.thumbnail} />
									</Flex>
									<PublishedProjectContent content={project_content.data} />
								</Flex>
							</Flex>
						</Flex>
					)}
				{(project_technologies.isSuccess && project_content.isSuccess) || (
					<HashLoader size={48} color='#fff' />
				)}
			</Modal>
		),
	};
}
