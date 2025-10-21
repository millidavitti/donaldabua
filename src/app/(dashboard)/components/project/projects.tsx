import Flex from "@/components/layouts/flex";
import Project from "./project";
import useProjects from "@/hooks/interface/dashboard/use-projects.interface";
import { PackageOpen } from "lucide-react";
import { HashLoader } from "react-spinners";
import { cn } from "@/utils/cn";
import { Project as TProject } from "@/data/dashboard/dashboard-atoms/types";
import { ReactNode } from "react";

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
						"grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]",
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
				<Flex flex='column' className='m-auto border-none items-center'>
					<PackageOpen size={32} />
					<p className='font-medium'>You have no projects </p>
				</Flex>
			)}
			{isFetching && (
				<Flex
					flex='column'
					className='m-auto self-center border-none items-center'
				>
					<HashLoader size={24} />
				</Flex>
			)}
		</>
	);
}
