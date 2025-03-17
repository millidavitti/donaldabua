import Flex from "@/components/layouts/flex";
import { useAtomValue } from "jotai";
import Overlay from "@/components/layouts/overlay";
import ViewProject from "../view-project";
import {
	project_snapshot_jotai,
	projects_snapshot_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import PublishedProject from "./published-project";
import DraftProject from "../draft-project/draft-project";
import ContentBuilder from "../content-builder/content-builder";
import PreviewProjectDraft from "../preview-project-draft/preview-project-draft";
import { project_form_step_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { HashLoader } from "react-spinners";

export default function PublishedProjects() {
	const projects_snapshot = useAtomValue(projects_snapshot_jotai);
	const project_snapshot = useAtomValue(project_snapshot_jotai);
	const project_form_step = useAtomValue(project_form_step_jotai);
	return (
		<>
			<Flex className='flex-wrap gap-3 min-h-[360px] max-h-[720px]'>
				{projects_snapshot.map((project, i) => {
					return (
						<PublishedProject key={project.id} project={project} index={i} />
					);
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
			<Overlay
				stateFlag='edit-published-project'
				className='flex justify-center items-center'
			>
				{project_form_step === "draft-project-info" ? (
					<DraftProject>
						<ContentBuilder />
					</DraftProject>
				) : (
					project_form_step === "preview-project-draft" || <HashLoader />
				)}

				{project_form_step === "preview-project-draft" && (
					<PreviewProjectDraft />
				)}
			</Overlay>
		</>
	);
}
