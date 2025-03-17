import { updateUserProfile } from "@/backend/controllers/profile/update-profile.controller";
import {
	profile_availability_jotai,
	profile_snapshot_jotai,
	ProfileAvailabilityOptions,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export function useEditProfileAvailabilityInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [profile_availability, profile_availability_setter] = useAtom(
		profile_availability_jotai,
	);
	const [profile_snapshot, profile_snapshot_setter] = useAtom(
		profile_snapshot_jotai,
	);

	function editAvailability() {
		dashboard_view_setter("edit-hours-per-week");
	}
	function cancelAvailabilityEdit() {
		dashboard_view_setter(null);
	}
	function captureAvailabilityEdit(value: string) {
		profile_availability_setter(value as ProfileAvailabilityOptions);
	}

	async function saveAvailabilityEdit() {
		dashboard_view_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profile_snapshot.id, {
				availability: profile_availability,
			});
			if (error) throw error;
			else profile_snapshot_setter(profile);
		} catch (error) {
			console.error("---saveAvailabilityEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_availability_setter(profile_snapshot.availability);
		}
	}

	return {
		editAvailability,
		cancelAvailabilityEdit,
		captureAvailabilityEdit,
		saveAvailabilityEdit,
		profile_hours_per_week: profile_availability,
	};
}
