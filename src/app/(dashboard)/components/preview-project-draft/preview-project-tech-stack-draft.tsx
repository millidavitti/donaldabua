import Flex from "@/components/layouts/flex";
import { project_technologies_jotai } from "@/data/atoms/app_data";
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
			<Flex className='gap-3 flex-wrap shrink-0'>
				{project_technologies.map((tech) => (
					<ProfileTechnology tech={tech} key={tech.id} />
				))}
			</Flex>
		</>
	);
}
