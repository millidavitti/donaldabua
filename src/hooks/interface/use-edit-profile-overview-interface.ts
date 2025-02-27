import { updateUserProfile } from "@/backend/update-user-profile.controller";
import {
	profile_snapshot_jotai,
	profile_overview_jotai,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export function useEditProfileOverviewInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_overview, profile_overview_setter] = useAtom(
		profile_overview_jotai,
	);
	const [profile_snapshot, profile_snapshot_setter] = useAtom(
		profile_snapshot_jotai,
	);

	function editOverview() {
		edit_profile_setter("edit-profile-overview");
	}

	function cancelOverviewEdit() {
		edit_profile_setter(null);
	}

	async function saveOverviewEdit() {
		edit_profile_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profile_snapshot.id, {
				overview: profile_overview,
			});
			if (error) throw error;
			else profile_snapshot_setter(profile);
		} catch (error) {
			console.log("---saveOverviewEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_overview_setter(profile_snapshot.overview);
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
