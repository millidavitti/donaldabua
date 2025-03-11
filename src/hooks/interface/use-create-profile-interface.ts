import { createProfileController } from "@/backend/create-profile.controller";
import {
	profile_snapshot_jotai,
	user_snapshot_jotai,
} from "@/data/atoms/app_data";
import { api_task_jotai, dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";

export default function useCreateProfileInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const user_snapshot = useAtomValue(user_snapshot_jotai);
	const profile_snapshot_setter = useSetAtom(profile_snapshot_jotai);
	const [api_task, api_task_setter] = useAtom(api_task_jotai);
	const [profileTitle, setProfileTitle] = useState("");

	function createProfile() {
		dashboard_view_setter("create-profile");
	}

	function cancelProfileCreation() {
		dashboard_view_setter(null);
	}

	async function saveProfile() {
		api_task_setter("create_profile");
		try {
			const { profile, error } = await createProfileController(
				user_snapshot.id,
				{
					title: profileTitle,
				},
			);

			if (error) throw new Error(error);
			else if (profile) profile_snapshot_setter(profile);
			setProfileTitle("");
			dashboard_view_setter(null);
			api_task_setter(null);
		} catch (error) {
			console.error("---saveProfile---\n", error);
			api_task_setter(null);
		}
	}

	function captureProfileTitle(value: string) {
		setProfileTitle(value);
	}
	return {
		createProfile,
		cancelProfileCreation,
		profileTitle,
		saveProfile,
		captureProfileTitle,
		api_task,
	};
}
