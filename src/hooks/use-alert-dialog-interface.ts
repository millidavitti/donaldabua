import {
	dashboard_view_jotai,
	dialog_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom, useSetAtom } from "jotai";

export default function useAlertDialogInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [dialog, dialog_setter] = useAtom(dialog_jotai);

	function cancel() {
		dashboard_view_setter(null);
		dialog_setter("cancel");
	}

	function proceed() {
		dialog_setter("continue");
	}

	return { cancel, proceed, dialog };
}
