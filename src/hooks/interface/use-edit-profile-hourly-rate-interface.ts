import { updateUserProfile } from "@/backend/update-user-profile.controller";
import {
	profile_hourly_rate_jotai,
	profile_jotai,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom, useAtom } from "jotai";
import React from "react";
import { toast } from "sonner";

export default function useEditProfileHourlyRateInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_hourly_rate, profile_hourly_rate_setter] = useAtom(
		profile_hourly_rate_jotai,
	);
	const [{ id: profileId, hourlyRate }, profile_setter] =
		useAtom(profile_jotai);

	function editHourlyRate() {
		edit_profile_setter("edit-hourly-rate");
	}

	function cancelHourlyRateEdit() {
		edit_profile_setter(null);
	}

	async function saveHourlyRateEdit() {
		edit_profile_setter(null);
		try {
			const { error, profile } = await updateUserProfile(profileId, {
				hourlyRate: profile_hourly_rate,
			});
			if (error) {
				profile_hourly_rate_setter(hourlyRate);
				toast.error("Update failed. Please try again later");
			} else profile_setter(profile);
		} catch (error) {
			console.log("---saveTitleEdit---\n", error);
			toast.error("Update failed. Please try again later");
			profile_hourly_rate_setter(hourlyRate);
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
