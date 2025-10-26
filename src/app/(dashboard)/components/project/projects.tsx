import Flex from "@/components/layouts/flex";
import Project from "./project";
import { PackageOpen } from "lucide-react";
import { HashLoader } from "react-spinners";
import { cn } from "@/utils/cn";
import { Project as TProject } from "@/data/types";
import { ReactNode } from "react";
import useProjects from "./interfaces/use-projects.interface";

export default function Projects({
	children,
}: {
	children?: (project: TProject) => ReactNode;
}) {
	const { projects, isFetching, hasProjects, hasProject, isEmpty } =
		useProjects();

	return (
		<>
			<div
				className={cn(
					"gap-3 border-0 p-0 shrink-0",
					hasProject && "w-[240px]",
					hasProjects &&
						"grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]",
				)}
			>
				{projects.map((project, i) => {
					return (
						<Project key={project.id} project={project} index={i}>
							{children}
						</Project>
					);
				})}
			</div>
			{isEmpty && !isFetching && (
				<Flex flex='column' className='items-center m-auto border-none'>
					<PackageOpen size={32} />
					<p className='font-medium'>You have no projects </p>
				</Flex>
			)}
			{isFetching && (
				<Flex
					flex='column'
					className='items-center self-center m-auto border-none'
				>
					<HashLoader size={24} />
				</Flex>
			)}
		</>
	);
}
