"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Plus } from "lucide-react";
import Projects from "../project/projects";
import { useEditProjects } from "@/hooks/interface/dashboard/use-edit-projects.interface";

export default function EditProjects() {
	const { start, Modal } = useEditProjects();

	return (
		<>
			{Modal}
			<Flex
				flex='column'
				className='gap-3 border-0 relative p-0 h-[540px] overflow-y-auto'
			>
				<a href='#projects' className='sticky top-0 z-10 shrink-0'>
					<Flex className='items-center justify-between bg-light-surface shrink-0'>
						<p className='font-semibold lg:text-2xl'>Projects</p>
						<InteractiveIcon callback={start}>
							<Plus size={24} />
						</InteractiveIcon>
					</Flex>
				</a>
				<Projects />
			</Flex>
		</>
	);
}
