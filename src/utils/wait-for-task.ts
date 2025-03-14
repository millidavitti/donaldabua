import { defaultStore } from "@/data/atoms/app_data";
import { api_task_jotai, ApiTask, dialog_jotai } from "@/data/atoms/ui_state";

export function waitForTask() {
	return (resolve: (value: boolean) => void) => {
		const checkTask = () => {
			if (defaultStore.get(dialog_jotai) === "continue") {
				resolve(true);
			} else if (defaultStore.get(dialog_jotai) === "cancel") {
				resolve(false);
			} else {
				setTimeout(checkTask, 2000);
			}
		};
		console.log("Done");
		checkTask();
	};
}
