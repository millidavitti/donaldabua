import { updateUserProfile } from "@/backend/update-user-profile.controller";
import { profile_jotai, profile_title_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export default function useEditProfileTitleInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_title, profile_title_setter] = useAtom(profile_title_jotai);
	const [{ id: profileId, title }, profile_setter] = useAtom(profile_jotai);

	function editTitle() {
		edit_profile_setter("edit-title");
	}

	function cancelTitleEdit() {
		edit_profile_setter(null);
	}

	async function saveTitleEdit() {
		edit_profile_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profileId, {
				title: profile_title,
			});
			if (error) {
				profile_title_setter(title);
				toast.error("Update failed. Please try again later");
			} else profile_setter(profile);
		} catch (error) {
			console.log("---saveTitleEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_title_setter(title);
		}
	}

	function captureTitleEdit(value: string) {
		profile_title_setter(value);
	}
	return {
		editTitle,
		cancelTitleEdit,
		captureTitleEdit,
		saveTitleEdit,
		profile_title,
	};
}
