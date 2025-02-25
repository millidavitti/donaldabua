import Flex from "@/components/layouts/flex";
import {
	project_content_jotai,
	project_technologies_jotai,
} from "@/data/atoms/app_data";
import { useAtomValue, useSetAtom } from "jotai";

export default function PublishedProjectTechStack() {
	const project_technologies = useAtomValue(project_technologies_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	return (
		<>
			{/* Technologies */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Technologies
			</label>
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
