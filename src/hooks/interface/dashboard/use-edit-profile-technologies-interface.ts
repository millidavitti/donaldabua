import { updateProfileTechnologiesController } from "@/backend/controllers/dashboard/profile/update-profile-technologies.controller";
import {
	profile_technologies_snapshot_jotai,
	profile_technologies_jotai,
	profile_snapshot_jotai,
	technologies_jotai,
	technologies_snapshot_jotai,
	defaultStore,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import {
	api_task_atom,
	dashboard_view_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useSetAtom, useAtom } from "jotai";
import { toast } from "sonner";

export default function useEditProfileTechnologiesInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [profile_technologies_snapshot, profile_technologies_snapshot_setter] =
		useAtom(profile_technologies_snapshot_jotai);
	const [profile_technologies, profile_technologies_setter] = useAtom(
		profile_technologies_jotai,
	);
	const technologies_setter = useSetAtom(technologies_jotai);
	const [api_task, api_task_setter] = useAtom(api_task_atom);

	const profile_snapshot = defaultStore.get(profile_snapshot_jotai);

	function editTechnologies() {
		dashboard_view_setter("edit-profile-technologies");
	}

	function cancelTechnologiesEdit() {
		dashboard_view_setter(null);
		profile_technologies_setter(
			defaultStore.get(profile_technologies_snapshot_jotai),
		);
		technologies_setter(defaultStore.get(technologies_snapshot_jotai));
	}

	async function saveTechnologiesEdit() {
		api_task_setter("save-technologies-edit");
		try {
			const { error } = await updateProfileTechnologiesController(
				profile_snapshot.id,
				profile_technologies,
			);
			if (error) throw error;
			profile_technologies_snapshot_setter(profile_technologies);
			dashboard_view_setter(null);
			api_task_setter(null);
		} catch (error) {
			console.error("---saveTechnologiesEdit---\n", error);
			api_task_setter(null);
			toast.error("Update failed. Please try again later");
		}
	}
	return {
		editTechnologies,
		cancelTechnologiesEdit,
		saveTechnologiesEdit,
		profile_technologies_snapshot,
		api_task,
	};
}
