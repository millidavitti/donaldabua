import { deleteProjectController } from "@/backend/controllers/project/delete-project.controller";
import { projects_snapshot_jotai } from "@/data/atoms/app_data";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { useSetAtom } from "jotai";
import { toast } from "sonner";
import useDialog from "../use-dialog";

export default function usePublishedProjectDeleteOption() {
	const projects_snapshot_setter = useSetAtom(projects_snapshot_jotai);
	const { closeDialog, displayDialog } = useDialog();
	async function deleteProject(projectID: string) {
		displayDialog();
		if (await new Promise(waitForDialog()))
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
	return { deleteProject };
}
