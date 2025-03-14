import {
	api_task_jotai,
	ApiTask,
	dashboard_view_jotai,
	dialog_jotai,
} from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import React from "react";

export default function useDialog() {
	const api_task_setter = useSetAtom(api_task_jotai);
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const dialog_setter = useSetAtom(dialog_jotai);

	function displayDialog(apiTask: ApiTask) {
		dashboard_view_setter("alert-dialog");
		api_task_setter(apiTask);
	}
	function closeDialog() {
		dashboard_view_setter(null);
		api_task_setter(null);
		dialog_setter(null);
	}
	return { closeDialog, displayDialog };
}
