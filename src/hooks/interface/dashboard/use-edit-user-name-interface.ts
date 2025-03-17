import { updateUserController } from "@/backend/controllers/user/update-user.controller";
import {
	user_snapshot_jotai,
	user_name_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { toast } from "sonner";

export function useEditUserNameInterface() {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [user_name, user_name_setter] = useAtom(user_name_jotai);
	const [user_snapshot, user_snapshot_setter] = useAtom(user_snapshot_jotai);

	function editName() {
		dashboard_view_setter("edit-name");
	}
	function cancelNameEdit() {
		user_name_setter(user_snapshot.name);
		dashboard_view_setter(null);
	}

	async function saveNameEdit() {
		try {
			dashboard_view_setter(null);
			const { error, user } = await updateUserController(user_snapshot.id, {
				name: user_name,
			});

			if (error) throw error;
			else user_snapshot_setter(user);
		} catch (error) {
			user_name_setter(user_snapshot.name);
			toast.error("Update failed. Please try again later");
			console.error("---saveNameEdit---\n", error);
		}
	}

	function captureNameEdit(value: string) {
		user_name_setter(value);
	}
	return {
		edit_profile: dashboard_view,
		user_name,
		cancelNameEdit,
		captureNameEdit,
		editName,
		saveNameEdit,
	};
}
