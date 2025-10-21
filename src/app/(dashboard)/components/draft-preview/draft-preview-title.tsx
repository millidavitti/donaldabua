import Flex from "@/components/layouts/flex";
import { input_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtomValue } from "jotai";

export default function DraftPreviewTitle() {
	const input_project = useAtomValue(input_project_atom);

	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<label className='text-xl font-semibold' htmlFor='title'>
				Project Title
			</label>
			<p>{input_project.title}</p>
		</Flex>
	);
}
