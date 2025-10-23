import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useSetAtom } from "jotai";
import { useState } from "react";

export function useContentBuilderImage() {
	const [componentId, setComponentId] = useState<string | null>(null);
	const [url, setUrl] = useState("");
	const set_input_project_content = useSetAtom(input_project_content_atom);

	const captureInput = (url: string) => setUrl(url);
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
