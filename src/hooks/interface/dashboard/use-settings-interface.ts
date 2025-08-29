import {
	api_task_jotai,
	dashboard_view_jotai,
	settings_view_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtomValue, useSetAtom } from "jotai";
import { redirect } from "next/navigation";

export default function useSettings() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const settings_view_setter = useSetAtom(settings_view_jotai);
	const api_task = useAtomValue(api_task_jotai);

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
		redirect("/auth/sign-out");
	}
	return { display, close, manageTechnologies, signOut, api_task };
}
