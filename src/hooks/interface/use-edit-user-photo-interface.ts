import { updateUserController } from "@/backend/update-user.controller";
import { user_image_jotai, user_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom, useAtomValue } from "jotai";
import { toast } from "sonner";

export function useEditUserPhotoInterface() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [user_image, user_image_setter] = useAtom(user_image_jotai);
	const { id: userId, image } = useAtomValue(user_jotai);

	function editPhoto() {
		edit_profile_setter("edit-image");
	}

	function cancelPhotoEdit() {
		user_image_setter(image);
		edit_profile_setter(null);
	}

	async function savePhotoEdit() {
		try {
			edit_profile_setter(null);
			const { error } = await updateUserController(userId, {
				image: user_image,
			});

			if (error) toast.error("Update failed. Please try again later");
		} catch (error) {
			user_image_setter(image);
			toast.error("Update failed. Please try again later");
			console.log("---savePhotoEdit---\n", error);
		}
	}

	function capturePhotoEdit(value: string) {
		user_image_setter(value);
	}
	return {
		edit_profile,
		user_image,
		editPhoto,
		cancelPhotoEdit,
		savePhotoEdit,
		capturePhotoEdit,
	};
}
