import { updateUserProfile } from "@/backend/update-user-profile.controller";
import {
	availability_jotai,
	profile_snapshot_jotai,
	ProfileAvailabilityOptions,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export function useEditProfileAvailabilityInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_hours_per_week, profile_hours_per_week_setter] =
		useAtom(availability_jotai);
	const [profile_snapshot, profile_snapshot_setter] = useAtom(
		profile_snapshot_jotai,
	);

	function editAvailability() {
		edit_profile_setter("edit-hours-per-week");
	}
	function cancelAvailabilityEdit() {
		edit_profile_setter(null);
	}
	function captureAvailabilityEdit(value: string) {
		profile_hours_per_week_setter(value as ProfileAvailabilityOptions);
	}

	async function saveAvailabilityEdit() {
		edit_profile_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profile_snapshot.id, {
				availability: profile_hours_per_week,
			});
			if (error) {
				profile_hours_per_week_setter(profile_snapshot.availability);
				toast.error("Update failed. Please try again later");
			} else profile_snapshot_setter(profile);
		} catch (error) {
			console.log("---saveAvailabilityEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_hours_per_week_setter(profile_snapshot.availability);
		}
	}

	return {
		editAvailability,
		cancelAvailabilityEdit,
		captureAvailabilityEdit,
		saveAvailabilityEdit,
		profile_hours_per_week,
	};
}
