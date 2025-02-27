import { updateUserController } from "@/backend/update-user.controller";
import { user_snapshot_jotai, user_name_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { toast } from "sonner";

export function useEditUserNameInterface() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [user_name, user_name_setter] = useAtom(user_name_jotai);
	const [user_snapshot, user_snapshot_setter] = useAtom(user_snapshot_jotai);

	function editName() {
		edit_profile_setter("edit-name");
	}
	function cancelNameEdit() {
		user_name_setter(user_snapshot.name);
		edit_profile_setter(null);
	}

	async function saveNameEdit() {
		try {
			edit_profile_setter(null);
			const { error, user } = await updateUserController(user_snapshot.id, {
				name: user_name,
			});

			if (error) throw error;
			else user_snapshot_setter(user);
		} catch (error) {
			user_name_setter(user_snapshot.name);
			toast.error("Update failed. Please try again later");
			console.log("---saveNameEdit---\n", error);
		}
	}

	function captureNameEdit(value: string) {
		user_name_setter(value);
	}
	return {
		edit_profile,
		user_name,
		cancelNameEdit,
		captureNameEdit,
		editName,
		saveNameEdit,
	};
}
