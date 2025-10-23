import { useAtom } from "jotai";
import {
	mutate_technologies_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";

export default function useManageTechnologies() {
	const [mutate_technologies] = useAtom(mutate_technologies_atom);
	const [payload_view] = useAtom(payload_view_atom);

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
