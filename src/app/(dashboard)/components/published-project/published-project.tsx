import Flex from "@/components/layouts/flex";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { Project, selected_project_jotai } from "@/data/atoms/app_data";
import PublishedProjectOptions from "./published-project-options";
import PublishedProjectEditOption from "./options/published-project-edit-option";
import PublishedProjectDeleteOption from "./options/published-project-delete-option";

interface PublishedProject {
	project: Project;
}
export default function PublishedProject({ project }: PublishedProject) {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const selected_project_setter = useSetAtom(selected_project_jotai);

	return (
		<>
			<Flex className='shrink-0 gap-3 grow w-full md:basis-52 relative'>
				{/* Project */}
				<Flex
					flex='column'
					className='gap-3 grow md:basis-52 cursor-pointer active:scale-[.98] transition'
					htmlProps={{
						onClick() {
							edit_profile_setter("view-project");
							selected_project_setter(project);
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
