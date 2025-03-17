import { updateUserProfile } from "@/backend/controllers/profile/update-profile.controller";
import {
	profile_snapshot_jotai,
	profile_overview_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export function useEditProfileOverviewInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [profile_overview, profile_overview_setter] = useAtom(
		profile_overview_jotai,
	);
	const [profile_snapshot, profile_snapshot_setter] = useAtom(
		profile_snapshot_jotai,
	);

	function editOverview() {
		dashboard_view_setter("edit-profile-overview");
	}

	function cancelOverviewEdit() {
		dashboard_view_setter(null);
	}

	async function saveOverviewEdit() {
		dashboard_view_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profile_snapshot.id, {
				overview: profile_overview,
			});
			if (error) throw error;
			else profile_snapshot_setter(profile);
		} catch (error) {
			console.error("---saveOverviewEdit---\n", error);
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
