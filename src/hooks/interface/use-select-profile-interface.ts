import {
	profile_snapshot_jotai,
	profiles_jotai,
	UserProfile,
} from "@/data/atoms/app_data";
import { dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useAtomValue, useSetAtom } from "jotai";

export default function useSelectProfileInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const profile_snapshot_setter = useSetAtom(profile_snapshot_jotai);
	const profiles = useAtomValue(profiles_jotai);
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
	return { display, close, profiles, select };
}
