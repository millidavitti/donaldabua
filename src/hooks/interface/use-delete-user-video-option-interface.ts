import { updateUserController } from "@/backend/update-user.controller";
import { user_jotai, user_video_jotai } from "@/data/atoms/app_data";
import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { toast } from "sonner";

export default function useDeleteUserVideoOptionInterface() {
	const user_video_setter = useSetAtom(user_video_jotai);
	const { id: userId, video } = useAtomValue(user_jotai);
	const user_setter = useSetAtom(user_jotai);
	async function deleteVideo() {
		user_video_setter(null);
		try {
			const { error, user } = await updateUserController(userId, {
				video: null,
			});

			if (error) toast.error("Update failed. Please try again later");
			else user_setter(user);
		} catch (error) {
			user_video_setter(video);
			toast.error("Update failed. Please try again later");
			console.log("---saveVideoEdit---\n", error);
		}
	}

	return { deleteVideo };
}
