import Flex from "@/components/layouts/flex";
import Project from "./published-project";
import useProjects from "@/hooks/interface/dashboard/use-projects.interface";

export default function Projects() {
	const { projects } = useProjects();
	return (
		<>
			<Flex className='flex-wrap gap-3 min-h-[360px] max-h-[720px] border-0 p-0'>
				{projects?.map((project, i) => {
					return <Project key={project.id} project={project} index={i} />;
				})}
			</Flex>

			{/* 
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
			</Overlay> */}
		</>
	);
}
