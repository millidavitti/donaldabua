import { useResetProjectFormFields } from "../../use-reset-project-form-fields";
import ContentBuilder from "@/app/(dashboard)/components/content-builder/content-builder";
import DraftProject from "@/app/(dashboard)/components/draft-project/draft-project";
import PreviewProjectDraft from "@/app/(dashboard)/components/preview-project-draft/preview-project-draft";
import Modal from "@/components/layouts/modal";
import { useState } from "react";

export function useEditProjects() {
	const resetProjectFormFields = useResetProjectFormFields();
	const [context, setContext] = useState<
		"draft-project" | "preview-draft" | null
	>(null);

	function start() {
		resetProjectFormFields();
		setContext("draft-project");
	}

	const close = () => {
		setContext(null);
		resetProjectFormFields();
	};
	return {
		start,
		Modal: context && (
			<Modal close={close}>
				{context === "draft-project" && (
					<DraftProject close={close}>
						<ContentBuilder />
					</DraftProject>
				)}
				{context === "preview-draft" && <PreviewProjectDraft />}
			</Modal>
		),
	};
}
