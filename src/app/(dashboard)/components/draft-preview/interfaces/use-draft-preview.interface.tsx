import { useSetAtom } from "jotai";
import { useProjectDraft } from "../../profile/interfaces/use-projects.interface";

export function useDraftPreview() {
	const set_context = useSetAtom(useProjectDraft.context_atom);

	function draftProject() {
		set_context("draft-project");
	}
	return { draftProject };
}
