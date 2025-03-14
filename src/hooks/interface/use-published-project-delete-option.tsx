import { deleteProjectController } from "@/backend/delete-project.controller";
import { projects_snapshot_jotai } from "@/data/atoms/app_data";
import { api_task_jotai } from "@/data/atoms/ui_state";
import { waitForTask } from "@/utils/wait-for-task";
import { useAtomValue, useSetAtom } from "jotai";
import { toast } from "sonner";
import useDialog from "../use-dialog";

export default function usePublishedProjectDeleteOption() {
	const projects_snapshot_setter = useSetAtom(projects_snapshot_jotai);
	const api_task = useAtomValue(api_task_jotai);
	const { closeDialog, displayDialog } = useDialog();
	async function deleteProject(projectID: string) {
		displayDialog("delete-project");
		if (await new Promise(waitForTask()))
			try {
				const { error } = await deleteProjectController(projectID);
				if (error) throw error;

				projects_snapshot_setter((projects) => {
					return projects.filter((project) => project.id !== projectID);
				});
			} catch (error) {
				console.error("---deleteProject---\n", error);
				toast.info("Unable to delete project. Please try again.");
			}
		closeDialog();
	}
	return { deleteProject, api_task };
}
