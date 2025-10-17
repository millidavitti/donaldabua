import { useResetProjectDraft } from "../../use-reset-project-draft";
import ContentBuilder from "@/app/(dashboard)/components/content-builder/content-builder";
import DraftProject from "@/app/(dashboard)/components/draft-project/draft-project";
import PreviewProjectDraft from "@/app/(dashboard)/components/preview-project-draft/preview-project-draft";
import Modal from "@/components/layouts/modal";
import {
	input_project_atom,
	input_project_content_atom,
	input_project_technologies_atom,
	project_atom,
	project_content_atom,
	project_technologies_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import {
	Project,
	ProjectContent,
	Technology,
} from "@/data/dashboard/dashboard-atoms/types";
import { atom, useAtom, useSetAtom } from "jotai";
import { HashLoader } from "react-spinners";

export function useEditProjects() {
	const resetProjectFormFields = useResetProjectDraft();
	const [context, set_context] = useAtom(useEditProjects.context_atom);
	const [project_content] = useAtom(project_content_atom);
	const [project_technologies] = useAtom(project_technologies_atom);
	const isProjectReady =
		(context === "draft-project" || context === "update-project") &&
		!(project_technologies.isFetching || project_content.isFetching);

	const start = () => {
		resetProjectFormFields();
		set_context("draft-project");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const set_project = useSetAtom(project_atom);
	const set_input_project = useSetAtom(input_project_atom);
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const set_input_project_technologies = useSetAtom(
		input_project_technologies_atom,
	);

	const edit = (project: Project) => {
		set_context("update-project");
		set_project(project);
		set_input_project(project);
		set_input_project_technologies(project_technologies.data as Technology[]);
		set_input_project_content(project_content.data as ProjectContent[]);
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const close = () => {
		set_context(null);
		resetProjectFormFields();
		document.onkeydown = null;
	};
	return {
		start,
		edit,
		Modal: context && (
			<Modal close={close}>
				{isProjectReady && (
					<DraftProject>
						<ContentBuilder />
					</DraftProject>
				)}
				{isProjectReady ||
					context === "preview-draft" ||
					context === "preview-update" || <HashLoader size={48} color='#fff' />}
				{(context === "preview-draft" || context === "preview-update") && (
					<PreviewProjectDraft />
				)}
			</Modal>
		),
	};
}

useEditProjects.context_atom = atom<
	"draft-project" | "preview-draft" | "update-project" | "preview-update" | null
>(null);
