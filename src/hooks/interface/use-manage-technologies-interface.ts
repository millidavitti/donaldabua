import { updateTechnologiesController } from "@/backend/update-technologies.controller";
import {
	technologies_jotai,
	technologies_snapshot_jotai,
} from "@/data/atoms/app_data";
import { api_task_jotai, settings_view_jotai } from "@/data/atoms/ui_state";
import { getErrorMessage } from "@/utils/get-error-message";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { toast } from "sonner";

export default function useManageTechnologiesInterface() {
	const settings_view_setter = useSetAtom(settings_view_jotai);
	const [api_task, api_task_setter] = useAtom(api_task_jotai);
	const [technologies, technologies_setter] = useAtom(technologies_jotai);
	const [technologies_snapshot, technologies_snapshot_setter] = useAtom(
		technologies_snapshot_jotai,
	);
	function close() {
		settings_view_setter(null);
	}

	async function updateTechnologies() {
		try {
			api_task_setter("create-technologies");
			const { error, technologies: savedTechnologies } =
				await updateTechnologiesController(technologies);

			if (error) throw new Error(error);
			else if (savedTechnologies)
				technologies_snapshot_setter([
					...savedTechnologies,
					...technologies_snapshot,
				]);
			api_task_setter(null);
			settings_view_setter(null);
		} catch (error) {
			console.error("---updateTechnologies---\n", error);
			toast.error(getErrorMessage(error));
			technologies_setter(technologies_snapshot);
			api_task_setter(null);
		}
	}
	return { updateTechnologies, api_task, close };
}
