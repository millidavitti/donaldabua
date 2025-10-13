import Flex from "@/components/layouts/flex";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useSetAtom } from "jotai";
import { useState } from "react";

export function useContentBuilderMarkdown() {
	const [markdown, setMarkdown] = useState<string | null>(null);
	const [componentId, setComponentId] = useState("");
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const [inputMarkdown, setInputMarkdown] = useState("");

	const captureInput = (markdown: string) => setInputMarkdown(markdown);

	const edit = (componentId: string, markdown: string) => {
		setComponentId(componentId);
		setMarkdown(markdown);
	};

	const save = (componentId: string, markdown: string) => {
		setMarkdown(null);
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
	return {
		edit,
		save,
		Modal: markdown && (
			<Modal>
				<Flex
					flex='column'
					className='max-w-[720px] w-full max-h-[90%] gap-3 relative bg-white neonScan'
				>
					<div
						className='shrink-0 p-3 w-full h-full'
						contentEditable='plaintext-only'
						aria-label='textarea'
						onKeyDown={(e) => {
							if (e.key === "Enter") save(componentId, inputMarkdown);
						}}
						onInput={(e) => {
							captureInput(e.currentTarget.textContent);
						}}
					>
						{markdown}
					</div>
					<Button
						className='bg-black text-white sticky bottom-0'
						onClick={() => save(componentId, inputMarkdown)}
					>
						Save
					</Button>
				</Flex>
			</Modal>
		),
	};
}
