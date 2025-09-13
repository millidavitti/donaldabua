import { mutate_user_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtom } from "jotai";

export function useDeleteUserVideoOptionInterface() {
	const [mutate_user] = useAtom(mutate_user_atom);

	async function deleteVideo() {
		await mutate_user.mutateAsync({ video: null });
	}

	return { deleteVideo };
}
