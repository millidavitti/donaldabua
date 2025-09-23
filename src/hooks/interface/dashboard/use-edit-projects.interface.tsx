import { useResetProjectDraft } from "../../use-reset-project-draft";
import ContentBuilder from "@/app/(dashboard)/components/content-builder/content-builder";
import DraftProject from "@/app/(dashboard)/components/draft-project/draft-project";
import PreviewProjectDraft from "@/app/(dashboard)/components/preview-project-draft/preview-project-draft";
import Modal from "@/components/layouts/modal";
import { atom, useAtom } from "jotai";

export function useEditProjects() {
	const resetProjectFormFields = useResetProjectDraft();
	const [context, set_context] = useAtom(useEditProjects.context_atom);

	function start() {
		resetProjectFormFields();
		set_context("draft-project");
	}

	const close = () => {
		set_context(null);
		resetProjectFormFields();
	};
	return {
		start,
		Modal: context && (
			<Modal close={close}>
				{context === "draft-project" && (
					<DraftProject>
						<ContentBuilder />
					</DraftProject>
				)}
				{context === "preview-draft" && <PreviewProjectDraft />}
			</Modal>
		),
	};
}

useEditProjects.context_atom = atom<"draft-project" | "preview-draft" | null>(
	null,
);
