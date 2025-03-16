import Flex from "@/components/layouts/flex";
import { useAtomValue } from "jotai";
import Overlay from "@/components/layouts/overlay";
import ViewProject from "../view-project";
import {
	project_snapshot_jotai,
	projects_snapshot_jotai,
} from "@/data/atoms/app_data";
import Project from "./project";
import { HashLoader } from "react-spinners";

export default function Projects() {
	const projects_snapshot = useAtomValue(projects_snapshot_jotai);
	const project_snapshot = useAtomValue(project_snapshot_jotai);

	return (
		<>
			<Flex className='flex-wrap gap-3 min-h-[360px] max-h-[720px]'>
				{projects_snapshot.map((project, i) => {
					return <Project key={project.id} project={project} index={i} />;
				})}
			</Flex>

			<Overlay
				stateFlag='view-project'
				className='flex justify-center items-center'
			>
				{project_snapshot ? (
					<ViewProject project={project_snapshot} />
				) : (
					<HashLoader />
				)}
			</Overlay>
		</>
	);
}
