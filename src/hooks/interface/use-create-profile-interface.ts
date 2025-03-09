import { createProfileController } from "@/backend/create-profile.controller";
import {
	profile_snapshot_jotai,
	profile_title_jotai,
	user_snapshot_jotai,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useState } from "react";

export default function useCreateProfileInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const user_snapshot = useAtomValue(user_snapshot_jotai);
	const profile_snapshot_setter = useSetAtom(profile_snapshot_jotai);
	const [profileTitle, setProfileTitle] = useState("");

	function createProfile() {
		edit_profile_setter("create-profile");
	}

	function cancelProfileCreation() {
		edit_profile_setter(null);
	}

	async function saveProfile() {
		edit_profile_setter(null);
		try {
			const { profile, error } = await createProfileController(
				user_snapshot.id,
				{
					title: profileTitle,
				},
			);

			if (error) throw new Error(error);
			profile_snapshot_setter((profile_snapshot) => ({
				...profile_snapshot,
				title: profile.title,
			}));
			setProfileTitle("");
		} catch (error) {
			console.error("---saveProfile---\n", error);
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
	};
}
