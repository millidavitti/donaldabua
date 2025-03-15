import { dashboard_view_jotai, dialog_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";

export default function useDialog() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const dialog_setter = useSetAtom(dialog_jotai);

	function displayDialog() {
		dashboard_view_setter("alert-dialog");
	}

	function closeDialog() {
		dashboard_view_setter(null);
		dialog_setter(null);
	}
	return { closeDialog, displayDialog };
}
