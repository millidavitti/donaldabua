import { useResetProjectDraft } from "../../use-reset-project-draft";
import ContentBuilder from "@/app/(dashboard)/components/content-builder/content-builder";
import DraftProject from "@/app/(dashboard)/components/draft-project/draft-project";
import PreviewProjectDraft from "@/app/(dashboard)/components/preview-project-draft/preview-project-draft";
import Modal from "@/components/layouts/modal";
import {
	project_content_atom,
	project_technologies_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { atom, useAtom } from "jotai";
import { HashLoader } from "react-spinners";

export function useEditProjects() {
	const resetProjectFormFields = useResetProjectDraft();
	const [context, set_context] = useAtom(useEditProjects.context_atom);
	const [project_content] = useAtom(project_content_atom);
	const [project_technologies] = useAtom(project_technologies_atom);
	const isProjectReady =
		context === "draft-project" &&
		!(project_technologies.isFetching || project_content.isFetching);
	const start = () => {
		resetProjectFormFields();
		set_context("draft-project");
	};

	const close = () => {
		set_context(null);
		resetProjectFormFields();
	};
	return {
		start,
		Modal: context && (
			<Modal close={close}>
				{isProjectReady && (
					<DraftProject>
						<ContentBuilder />
					</DraftProject>
				)}
				{isProjectReady || <HashLoader size={48} color='#fff' />}
				{context === "preview-draft" && <PreviewProjectDraft />}
			</Modal>
		),
	};
}

useEditProjects.context_atom = atom<"draft-project" | "preview-draft" | null>(
	null,
);
