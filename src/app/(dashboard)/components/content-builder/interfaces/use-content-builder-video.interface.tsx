import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { toast } from "sonner";

export default function useContentBuilderVideo() {
	const [componentId, setComponentId] = useState<string | null>(null);
	const [url, setUrl] = useState("");
	const set_input_project_content = useSetAtom(input_project_content_atom);

	const captureInput = (url: string) => {
		const youtubeEmbed = validateAndEmbedYouTubeUrl(url);
		if (youtubeEmbed) setUrl(youtubeEmbed);
		else toast.info("Provided an invalid YouTube link: " + url);
	};
	const edit = (componentId: string) => setComponentId(componentId);
	const save = (componentId: string) => {
		set_input_project_content((content) => {
			return content.map((comp) => {
				if (componentId === comp.id && url)
					return {
						...comp,
						url: url,
					};
				return comp;
			});
		});
		setUrl("");
		setComponentId(null);
	};

	return { componentId, save, edit, captureInput };
}
