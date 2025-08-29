import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom } from "jotai";
import {
	mutate_user_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";

export function useEditUserNameInterface() {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [userName, setUserName] = useState("");
	const [mutate_user] = useAtom(mutate_user_atom);
	const [payload_view] = useAtom(payload_view_atom);

	function editName() {
		dashboard_view_setter("edit-name");
	}
	function cancelNameEdit() {
		dashboard_view_setter(null);
	}

	async function saveNameEdit() {
		dashboard_view_setter(null);
		mutate_user.mutateAsync({ name: userName });
	}

	function captureNameEdit(value: string) {
		setUserName(value);
	}
	return {
		edit_profile: dashboard_view,
		user_name: payload_view.data?.user.name,
		cancelNameEdit,
		captureNameEdit,
		editName,
		saveNameEdit,
	};
}
