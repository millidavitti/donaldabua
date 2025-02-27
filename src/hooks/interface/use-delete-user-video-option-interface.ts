import { updateUserController } from "@/backend/update-user.controller";
import { user_snapshot_jotai, user_video_jotai } from "@/data/atoms/app_data";
import { useAtom, useSetAtom } from "jotai";
import { toast } from "sonner";

export function useDeleteUserVideoOptionInterface() {
	const user_video_setter = useSetAtom(user_video_jotai);
	const [user_snapshot, user_snapshot_setter] = useAtom(user_snapshot_jotai);

	async function deleteVideo() {
		user_video_setter(null);
		try {
			const { error, user } = await updateUserController(user_snapshot.id, {
				video: null,
			});

			if (error) {
				user_video_setter(user_snapshot.video);
				toast.error("Update failed. Please try again later");
			} else user_snapshot_setter(user);
		} catch (error) {
			user_video_setter(user_snapshot.video);
			toast.error("Update failed. Please try again later");
			console.log("---saveVideoEdit---\n", error);
		}
	}

	return { deleteVideo };
}
