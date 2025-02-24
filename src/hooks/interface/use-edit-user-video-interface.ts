import { updateUserController } from "@/backend/update-user.controller";
import { user_jotai, user_video_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { useAtom, useSetAtom } from "jotai";
import { toast } from "sonner";

export function useEditUserVideoInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [user_video, user_video_setter] = useAtom(user_video_jotai);
	const [{ id: userId, video }, user_setter] = useAtom(user_jotai);

	function cancelVideoEdit() {
		user_video_setter(video || "");
		edit_profile_setter(null);
	}

	async function saveVideoEdit() {
		try {
			edit_profile_setter(null);
			const { error, user } = await updateUserController(userId, {
				video: user_video,
			});

			if (error) {
				user_video_setter(video);
				toast.error("Update failed. Please try again later");
			} else user_setter(user);
		} catch (error) {
			user_video_setter(video);
			toast.error("Update failed. Please try again later");
			console.log("---saveVideoEdit---\n", error);
		}
	}

	function captureVideoEdit(value: string) {
		const youtubeEmbed = validateAndEmbedYouTubeUrl(value);
		if (youtubeEmbed || !value) user_video_setter(youtubeEmbed || null);
		else toast.info("Provide a valid YouTube link: " + value);
	}
	return { cancelVideoEdit, saveVideoEdit, captureVideoEdit, user_video };
}
