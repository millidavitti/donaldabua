import { useSetAtom } from "jotai";
import { usePortfolio } from "../../profile/interfaces/use-portfolio.interface";

export function useDraftPreview() {
	const set_context = useSetAtom(usePortfolio.context_atom);

	function draftProject() {
		set_context("draft-project");
	}
	return { draftProject };
}
