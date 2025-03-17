import Flex from "@/components/layouts/flex";
import { project_title_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtomValue } from "jotai";

export default function PreviewProjectTitle() {
	const project_title = useAtomValue(project_title_jotai);

	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<label className='text-xl font-semibold' htmlFor='title'>
				Project Title
			</label>
			<p>{project_title}</p>
		</Flex>
	);
}
