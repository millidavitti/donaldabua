import { defaultStore } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dialog_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";

export function waitForDialog() {
	return (resolve: (value: boolean) => void) => {
		setTimeout(() => resolve(false), 30000);

		const checkTask = () => {
			if (defaultStore.get(dialog_jotai) === "continue") {
				console.log("Continued");
				resolve(true);
			} else if (defaultStore.get(dialog_jotai) === "cancel") {
				console.log("Canceled");
				resolve(false);
			} else {
				setTimeout(checkTask, 2000);
			}
		};
		checkTask();
	};
}
