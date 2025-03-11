import { createTechnologiesController } from "@/backend/create-technologies.controller";
import {
	technologies_jotai,
	technologies_snapshot_jotai,
} from "@/data/atoms/app_data";
import { api_task_jotai, settings_view_jotai } from "@/data/atoms/ui_state";
import { getErrorMessage } from "@/utils/get-error-message";
import { useAtom, useSetAtom } from "jotai";
import React from "react";
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

	async function createTechnologies() {
		try {
			api_task_setter("create_technologies");
			const { error, technologies: savedTechnologies } =
				await createTechnologiesController(technologies);

			if (error) throw new Error(error);
			else if (savedTechnologies)
				technologies_snapshot_setter([
					...savedTechnologies,
					...technologies_snapshot,
				]);
			api_task_setter(null);
			settings_view_setter(null);
		} catch (error) {
			console.error("---createTechnologies---\n", error);
			toast.error(getErrorMessage(error));
			api_task_setter(null);
		}
	}
	return { createTechnologies, api_task, close };
}
