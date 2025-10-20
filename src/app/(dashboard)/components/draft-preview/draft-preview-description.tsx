import { input_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtomValue } from "jotai";

export default function DraftPreviewDescription() {
	const input_project = useAtomValue(input_project_atom);

	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Project Description
			</label>
			<p>{input_project.description}</p>
		</>
	);
}
