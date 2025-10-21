import Flex from "@/components/layouts/flex";
import { Technology } from "@/data/home/home-atoms/home-data";

export default function ProjectTechnologies({
	technologies,
}: {
	technologies: Technology[];
}) {
	return (
		<>
			{/* Technologies */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Technologies
			</label>
			<Flex className='gap-3 flex-wrap shrink-0 border-0 p-0'>
				{technologies.map((tech) => (
					<Flex className='gap-3 items-center' key={tech.id}>
						<p className='shrink-0 font-medium'>{tech.name}</p>
					</Flex>
				))}
			</Flex>
		</>
	);
}
