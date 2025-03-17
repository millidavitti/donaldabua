import Flex from "@/components/layouts/flex";
import { project_technologies_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtomValue } from "jotai";

export default function ProjectTechnologies() {
	const project_technologies = useAtomValue(project_technologies_jotai);

	return (
		<>
			{/* Technologies */}
			<h2 className='text-xl font-semibold shrink-0'>Technologies</h2>
			<Flex className='gap-3 flex-wrap shrink-0'>
				{project_technologies.map((tech) => (
					<Flex className='gap-3 items-center' key={tech.id}>
						<p className='shrink-0 font-medium'>{tech.name}</p>
					</Flex>
				))}
			</Flex>
		</>
	);
}
