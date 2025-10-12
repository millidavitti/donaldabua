import Flex from "@/components/layouts/flex";
import Project from "./project";
import useProjects from "@/hooks/interface/dashboard/use-projects.interface";
import { PackageOpen } from "lucide-react";
import { HashLoader } from "react-spinners";

export default function Projects() {
	const { projects, isFetching } = useProjects();
	return (
		<>
			<Flex className='flex-wrap gap-3 min-h-[360px] max-h-[720px] border-0 p-0'>
				{projects?.map((project, i) => {
					return <Project key={project.id} project={project} index={i} />;
				})}
				{!Boolean(projects?.length) && !isFetching && (
					<Flex flex='column' className='m-auto border-none items-center'>
						<PackageOpen size={32} />
						<p className='font-medium'>You have no projects </p>
					</Flex>
				)}
				{isFetching && (
					<Flex flex='column' className='m-auto border-none items-center'>
						<HashLoader size={24} />
					</Flex>
				)}
			</Flex>
		</>
	);
}
