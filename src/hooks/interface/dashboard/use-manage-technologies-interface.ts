import { settings_view_atom } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom, useSetAtom } from "jotai";
import { useQueryClient } from "@tanstack/react-query";
import {
	mutate_technologies_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";

export default function useManageTechnologies() {
	const settings_view_setter = useSetAtom(settings_view_atom);
	const [mutate_technologies] = useAtom(mutate_technologies_atom);
	const [payload_view] = useAtom(payload_view_atom);
	const qc = useQueryClient();

	const close = () => {
		qc.invalidateQueries({ queryKey: ["payload_view"] });
		settings_view_setter(null);
	};

	const updateTechnologies = async () => {
		const technologies = payload_view.data.technologies;
		await mutate_technologies.mutateAsync(technologies);
	};

	return {
		updateTechnologies,
		isPending: mutate_technologies.isPending,
		close,
	};
}
