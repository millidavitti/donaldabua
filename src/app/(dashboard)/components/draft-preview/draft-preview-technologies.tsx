import Flex from "@/components/layouts/flex";
import { useAtomValue } from "jotai";
import ProfileTechnology from "../profile-technology";
import { input_project_technologies_atom } from "@/data/dashboard/dashboard-atoms/data";

export default function DraftPreviewTechnologies() {
	const input_project_technologies = useAtomValue(
		input_project_technologies_atom,
	);

	return (
		<>
			{/* Tech Stack */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
			</label>
			<Flex className='gap-3 flex-wrap shrink-0 border-0 p-0'>
				{input_project_technologies.map((tech, i) => (
					<ProfileTechnology tech={tech} key={tech.id} index={i} />
				))}
			</Flex>
		</>
	);
}
