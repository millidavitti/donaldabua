import { updateUserProfile } from "@/backend/update-user-profile.controller";
import { profile_jotai, profile_overview_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export function useEditProfileOverviewInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_overview, profile_overview_setter] = useAtom(
		profile_overview_jotai,
	);
	const [{ id: profileId, overview }, profile_setter] = useAtom(profile_jotai);

	function editOverview() {
		edit_profile_setter("edit-profile-overview");
	}

	function cancelOverviewEdit() {
		edit_profile_setter(null);
	}

	async function saveOverviewEdit() {
		edit_profile_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profileId, {
				overview: profile_overview,
			});
			if (error) {
				profile_overview_setter(overview);
				toast.error("Update failed. Please try again later");
			} else profile_setter(profile);
		} catch (error) {
			console.log("---saveTitleEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_overview_setter(overview);
		}
	}

	function captureOverviewEdit(value: string) {
		profile_overview_setter(value);
	}
	return {
		editOverview,
		cancelOverviewEdit,
		saveOverviewEdit,
		captureOverviewEdit,
		profile_overview,
	};
}
