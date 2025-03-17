import { deleteProfileController } from "@/backend/controllers/profile/delete-profile.controller";
import {
	profile_snapshot_jotai,
	profiles_jotai,
	profiles_snapshot_jotai,
	UserProfile,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { useAtomValue, useSetAtom } from "jotai";
import useDialog from "../use-dialog";

export default function useSelectProfileInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const profile_snapshot_setter = useSetAtom(profile_snapshot_jotai);
	const profiles_snapshot_setter = useSetAtom(profiles_snapshot_jotai);
	const profiles = useAtomValue(profiles_jotai);
	const { closeDialog, displayDialog } = useDialog();

	function display() {
		dashboard_view_setter("select-profile");
	}

	function close() {
		dashboard_view_setter(null);
	}

	function select(profile: UserProfile) {
		profile_snapshot_setter(profile);
		close();
	}

	async function remove(profileId: string) {
		if (profiles.length > 1) {
			displayDialog();
			if (await new Promise(waitForDialog()))
				try {
					const { profile, error } = await deleteProfileController(profileId);

					if (error) throw new Error(error);
					else if (profile) {
						profiles_snapshot_setter(
							profiles.filter((profile) => profile.id !== profileId),
						);
						profile_snapshot_setter(
							profiles.filter((profile) => profile.id !== profileId)[0],
						);
					}
				} catch (error) {
					console.error("---useSelectProfileInterface:remove---\n", error);
				}
			closeDialog();
		}
	}
	return { display, close, profiles, select, remove };
}
