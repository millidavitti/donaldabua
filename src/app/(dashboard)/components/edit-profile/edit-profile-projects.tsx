"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Plus } from "lucide-react";
import PublishedProjects from "../published-project/published-projects";
import { useEditProjects } from "@/hooks/interface/dashboard/use-edit-projects.interface";

export default function EditProjects() {
	const { start, Modal } = useEditProjects();

	return (
		<>
			{Modal}
			<Flex
				flex='column'
				className='gap-3 border-0 p-0'
				htmlProps={{ id: "projects" }}
			>
				<a href='#projects'>
					{/* Header */}
					<Flex className='items-center justify-between shrink-0'>
						<p className='font-semibold lg:text-2xl'>Projects</p>
						<InteractiveIcon callback={start}>
							<Plus size={24} />
						</InteractiveIcon>
					</Flex>
				</a>
				{/* Projects */}
				<PublishedProjects />
			</Flex>
		</>
	);
}
