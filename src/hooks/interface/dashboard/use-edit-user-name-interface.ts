import { updateUserController } from "@/backend/controllers/dashboard/user/update-user.controller";
import {
	user_snapshot_jotai,
	user_name_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom } from "jotai";
import { toast } from "sonner";
import {
	mutate_user_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";

export function useEditUserNameInterface() {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [user_name, user_name_setter] = useAtom(user_name_jotai);
	const [mutate_user] = useAtom(mutate_user_atom);
	const [payload_view] = useAtom(payload_view_atom);

	function editName() {
		dashboard_view_setter("edit-name");
	}
	function cancelNameEdit() {
		user_name_setter(payload_view.data?.user.name);
		dashboard_view_setter(null);
	}

	async function saveNameEdit() {
		dashboard_view_setter(null);
		mutate_user.mutateAsync({ name: user_name });
	}

	function captureNameEdit(value: string) {
		user_name_setter(value);
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
