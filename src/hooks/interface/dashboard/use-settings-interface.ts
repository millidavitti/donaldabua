import {
	api_task_atom,
	dashboard_view_jotai,
	settings_view_atom,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

export default function useSettings() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const settings_view_setter = useSetAtom(settings_view_atom);
	const api_task = useAtomValue(api_task_atom);
	const router = useRouter();
	function display() {
		dashboard_view_setter("settings");
	}
	function close() {
		dashboard_view_setter(null);
	}

	function manageTechnologies() {
		settings_view_setter("manage-technologies");
	}

	async function signOut() {
		router.replace("/auth/sign-out");
	}
	return { display, close, manageTechnologies, signOut, api_task };
}
