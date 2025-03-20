import {
	api_task_jotai,
	dashboard_view_jotai,
	settings_view_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { signOut as destroySession } from "@/backend/auth/sign-out.controller";
import { toast } from "sonner";
export default function useSettingsInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const settings_view_setter = useSetAtom(settings_view_jotai);
	const [api_task, api_task_setter] = useAtom(api_task_jotai);
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
		try {
			api_task_setter("sign-out");
			await destroySession();
			router.replace("/auth/sign-in");
			// window.location.reload();
			router.refresh();
		} catch (error) {
			console.error("---signOut---\n", error);
			toast.error("Unable to sign out");
			api_task_setter(null);
		}
	}
	return { display, close, manageTechnologies, signOut, api_task };
}
