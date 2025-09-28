import { useSetAtom } from "jotai";
import { useEditProjects } from "./use-edit-projects.interface";

export function usePreviewProjectDraft() {
	const set_context = useSetAtom(useEditProjects.context_atom);

	function draftProject() {
		set_context("draft-project");
	}
	return { draftProject };
}
