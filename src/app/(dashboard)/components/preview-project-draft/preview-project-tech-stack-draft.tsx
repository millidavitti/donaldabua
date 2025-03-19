import Flex from "@/components/layouts/flex";
import { project_technologies_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtomValue } from "jotai";
import ProfileTechnology from "../profile-technology";

export default function PreviewProjectTechnologies() {
	const project_technologies = useAtomValue(project_technologies_jotai);

	return (
		<>
			{/* Tech Stack */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
			</label>
			<Flex className='gap-3 flex-wrap shrink-0 border-0 p-0'>
				{project_technologies.map((tech, i) => (
					<ProfileTechnology tech={tech} key={tech.id} index={i} />
				))}
			</Flex>
		</>
	);
}
