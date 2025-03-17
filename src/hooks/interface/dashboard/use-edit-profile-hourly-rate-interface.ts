import { updateUserProfile } from "@/backend/controllers/profile/update-profile.controller";
import {
	profile_hourly_rate_jotai,
	profile_snapshot_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export function useEditProfileHourlyRateInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [profile_hourly_rate, profile_hourly_rate_setter] = useAtom(
		profile_hourly_rate_jotai,
	);
	const [profile_snapshot, profile_snapshot_setter] = useAtom(
		profile_snapshot_jotai,
	);

	function editHourlyRate() {
		dashboard_view_setter("edit-hourly-rate");
	}

	function cancelHourlyRateEdit() {
		dashboard_view_setter(null);
	}

	async function saveHourlyRateEdit() {
		dashboard_view_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profile_snapshot.id, {
				hourlyRate: profile_hourly_rate,
			});
			if (error) throw error;
			else profile_snapshot_setter(profile);
		} catch (error) {
			console.error("---saveHourlyRateEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_hourly_rate_setter(profile_snapshot.hourlyRate);
		}
	}

	function captureHourlyRateEdit(value: number) {
		profile_hourly_rate_setter(value);
	}
	return {
		editHourlyRate,
		cancelHourlyRateEdit,
		saveHourlyRateEdit,
		captureHourlyRateEdit,
		profile_hourly_rate,
	};
}
