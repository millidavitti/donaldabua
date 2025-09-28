import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useSetAtom } from "jotai";
import { useState } from "react";

export function useContentBuilderMarkdown() {
	const [componentId, setComponentId] = useState<string | null>(null);
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const [markdown, setMarkdown] = useState("");

	const captureInput = (markdown: string) => setMarkdown(markdown);
	const edit = (componentId: string) => setComponentId(componentId);
	const save = (componentId: string) => {
		setComponentId(null);
		set_input_project_content((content) => {
			return content.map((comp) => {
				if (componentId === comp.id && markdown)
					return {
						...comp,
						markdown,
					};
				return comp;
			});
		});
	};
	return { componentId, edit, save, captureInput };
}
