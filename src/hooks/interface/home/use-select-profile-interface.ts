import {
	profile_snapshot_jotai,
	profiles_jotai,
	UserProfile,
} from "@/data/home/home-atoms/home-data";
import { vault_view_jotai } from "@/data//home/home-atoms/home-ui-state";
import { useAtomValue, useSetAtom } from "jotai";

export default function useSelectProfileInterface() {
	const vault_view_setter = useSetAtom(vault_view_jotai);
	const profile_snapshot_setter = useSetAtom(profile_snapshot_jotai);
	const profiles = useAtomValue(profiles_jotai);

	function display() {
		vault_view_setter("select-profile");
	}

	function close() {
		vault_view_setter(null);
	}

	function select(profile: UserProfile) {
		profile_snapshot_setter(profile);
		close();
	}

	return { display, close, profiles, select };
}
