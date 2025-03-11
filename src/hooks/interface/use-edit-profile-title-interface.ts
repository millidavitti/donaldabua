import { updateUserProfile } from "@/backend/update-user-profile.controller";
import {
	profile_snapshot_jotai,
	profile_title_jotai,
} from "@/data/atoms/app_data";
import { dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export function useEditProfileTitleInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [profile_title, profile_title_setter] = useAtom(profile_title_jotai);
	const [profile_snapshot, profile_snapshot_setter] = useAtom(
		profile_snapshot_jotai,
	);

	function editTitle() {
		dashboard_view_setter("edit-title");
	}

	function cancelTitleEdit() {
		dashboard_view_setter(null);
	}

	async function saveTitleEdit() {
		dashboard_view_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profile_snapshot.id, {
				title: profile_title,
			});
			if (error) throw new Error(error);
			else if (profile) profile_snapshot_setter(profile);
		} catch (error) {
			console.error("---saveTitleEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_title_setter(profile_snapshot.title);
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
