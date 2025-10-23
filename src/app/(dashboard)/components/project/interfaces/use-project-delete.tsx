import { waitForDialog } from "@/utils/wait-for-dialog";
import { useAtom } from "jotai";
import { delete_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import useDialog from "@/hooks/use-dialog";

export default function useProjectDelete() {
	const { closeDialog, displayDialog } = useDialog();
	const [delete_project] = useAtom(delete_project_atom);
	async function deleteProject(projectId: string) {
		displayDialog();
		if (await new Promise(waitForDialog()))
			await delete_project.mutateAsync(projectId);
		closeDialog();
	}
	return { deleteProject };
}
