import { deleteProjectController } from "@/backend/controllers/dashboard/project/delete-project.controller";

import { waitForDialog } from "@/utils/wait-for-dialog";
import { toast } from "sonner";
import useDialog from "../../use-dialog";

export default function usePublishedProjectDeleteOption() {
	const { closeDialog, displayDialog } = useDialog();
	async function deleteProject(projectID: string) {
		displayDialog();
		if (await new Promise(waitForDialog()))
			try {
				const { error } = await deleteProjectController(projectID);
				if (error) throw error;
			} catch (error) {
				console.error("---deleteProject---\n", error);
				toast.info("Unable to delete project. Please try again.");
			}
		closeDialog();
	}
	return { deleteProject };
}
