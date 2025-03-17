import { updateUserController } from "@/backend/controllers/user/update-user.controller";
import {
	user_image_jotai,
	user_snapshot_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { toast } from "sonner";

export function useEditUserPhotoInterface() {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [user_image, user_image_setter] = useAtom(user_image_jotai);
	const [user_snapshot, user_snapshot_setter] = useAtom(user_snapshot_jotai);

	function editPhoto() {
		dashboard_view_setter("edit-image");
	}

	function cancelPhotoEdit() {
		user_image_setter(user_snapshot.image);
		dashboard_view_setter(null);
	}

	async function savePhotoEdit() {
		try {
			dashboard_view_setter(null);
			const { error, user } = await updateUserController(user_snapshot.id, {
				image: user_image,
			});

			if (error) throw error;
			else user_snapshot_setter(user);
		} catch (error) {
			user_image_setter(user_snapshot.image);
			toast.error("Update failed. Please try again later");
			console.error("---savePhotoEdit---\n", error);
		}
	}

	function capturePhotoEdit(value: string) {
		user_image_setter(value);
	}
	return {
		edit_profile: dashboard_view,
		user_image,
		editPhoto,
		cancelPhotoEdit,
		savePhotoEdit,
		capturePhotoEdit,
	};
}
