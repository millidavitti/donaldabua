import { useAtom } from "jotai";
import { delete_project_atom } from "@/data/data";
import useAlertDialog from "@/hooks/use-alert-dialog.interface";

export default function useProjectDelete() {
	const { startDialog, Dialog } = useAlertDialog();
	const [delete_project] = useAtom(delete_project_atom);

	async function deleteProject(projectId: string) {
		if (await startDialog()) await delete_project.mutateAsync(projectId);
	}
	return { deleteProject, Dialog };
}
