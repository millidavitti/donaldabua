import { dialog_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { atom, useSetAtom } from "jotai";

export default function useToogleDialog() {
	const set_dialog = useSetAtom(dialog_atom);
	const dialog_setter = useSetAtom(dialog_jotai);

	function displayDialog() {
		set_dialog("display-dialog");
	}

	function closeDialog() {
		set_dialog(null);
		dialog_setter(null);
	}
	return { closeDialog, displayDialog };
}

const dialog_atom = atom<"display-dialog" | null>(null);
