import { updateUserController } from "@/backend/controllers/dashboard/user/update-user.controller";
import {
	user_snapshot_jotai,
	user_video_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { useAtom, useSetAtom } from "jotai";
import { toast } from "sonner";

export function useEditUserVideoInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [user_video, user_video_setter] = useAtom(user_video_jotai);
	const [{ video }, user_setter] = useAtom(user_snapshot_jotai);

	function cancelVideoEdit() {
		user_video_setter(video || "");
		dashboard_view_setter(null);
	}

	async function saveVideoEdit() {
		try {
			dashboard_view_setter(null);
			const { error, user } = await updateUserController({
				video: user_video,
			});

			if (error) {
				user_video_setter(video);
				toast.error("Update failed. Please try again later");
			} else user_setter(user);
		} catch (error) {
			user_video_setter(video);
			toast.error("Update failed. Please try again later");
			console.error("---saveVideoEdit---\n", error);
		}
	}

	function captureVideoEdit(value: string) {
		const youtubeEmbed = validateAndEmbedYouTubeUrl(value);
		if (youtubeEmbed || !value) user_video_setter(youtubeEmbed || null);
		else toast.info("Provide a valid YouTube link: " + value);
	}
	return { cancelVideoEdit, saveVideoEdit, captureVideoEdit, user_video };
}
