import Flex from "@/components/layouts/flex";
import Project from "./project";
import useProjects from "@/hooks/interface/dashboard/use-projects.interface";
import { PackageOpen } from "lucide-react";
import { HashLoader } from "react-spinners";
import { cn } from "@/utils/cn";

export default function Projects() {
	const { projects, isFetching, hasProjects, hasProject, isEmpty } =
		useProjects();

	return (
		<>
			<div
				className={cn(
					"columns-3 gap-3 border-0 p-0",
					hasProject && "w-[240px]",
					hasProjects && "columns-[240px]", // optional: dynamic column width
				)}
			>
				{projects.map((project, i) => {
					return <Project key={project.id} project={project} index={i} />;
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
