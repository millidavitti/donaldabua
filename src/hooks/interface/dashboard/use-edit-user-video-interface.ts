import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { useAtom, useSetAtom } from "jotai";
import { toast } from "sonner";
import {
	mutate_user_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";

export function useEditUserVideoInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [video, setVideo] = useState("");
	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_user] = useAtom(mutate_user_atom);
	function cancelVideoEdit() {
		dashboard_view_setter(null);
	}

	async function saveVideoEdit() {
		dashboard_view_setter(null);
		await mutate_user.mutateAsync({ video });
	}

	function captureVideoEdit(value: string) {
		const youtubeEmbed = validateAndEmbedYouTubeUrl(value);
		console.log(youtubeEmbed);
		if (youtubeEmbed) setVideo(youtubeEmbed);
		else toast.info("Provide a valid YouTube link: " + value);
	}

	return {
		cancelVideoEdit,
		saveVideoEdit,
		captureVideoEdit,
		video: payload_view.data?.user.video || "",
	};
}
