import Flex from "@/components/layouts/flex";
import { input_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtomValue } from "jotai";

export default function DraftPreviewDeployment() {
	const input_project = useAtomValue(input_project_atom);

	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<label className='text-xl font-semibold' htmlFor='title'>
				Deployment
			</label>
			<a
				href={input_project.deployment}
				className='text-blue-700 font-semibold'
				target='_blank'
			>
				{input_project.deployment}
			</a>
		</Flex>
	);
}
