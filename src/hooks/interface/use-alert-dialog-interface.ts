import {
	api_task_jotai,
	ApiTask,
	dashboard_view_jotai,
	dialog_jotai,
} from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import React from "react";

export default function useAlertDialogInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [api_task, api_task_setter] = useAtom(api_task_jotai);
	const [dialog, dialog_setter] = useAtom(dialog_jotai);

	function cancel() {
		dashboard_view_setter(null);
		api_task_setter(null);
		dialog_setter("cancel");
	}

	function proceed(apiTask: ApiTask) {
		api_task_setter(apiTask);
		dialog_setter("continue");
	}

	return { cancel, proceed, dialog, api_task };
}
