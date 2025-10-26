import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { input_project_content_atom } from "@/data/data";
import { useSetAtom } from "jotai";
import { X } from "lucide-react";
import { useState } from "react";

export function useContentBuilderMarkdown() {
	const [markdown, setMarkdown] = useState<string | null>(null);
	const [componentId, setComponentId] = useState<string | null>(null);
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const [inputMarkdown, setInputMarkdown] = useState("");

	const captureInput = (markdown: string) => setInputMarkdown(markdown);

	const edit = (componentId: string, markdown: string) => {
		setComponentId(componentId);
		setMarkdown(markdown);
	};

	const save = (componentId: string, markdown: string) => {
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
		close();
	};

	const close = () => {
		setMarkdown(null);
		setComponentId(null);
	};

	return {
		edit,
		save,
		Modal: markdown && (
			<Modal>
				<Flex
					flex='column'
					className='max-w-[720px] w-full max-h-[90%] bg-light-surface gap-3 relative neonScan'
				>
					<InteractiveIcon callback={close} className='ml-auto sticky top-0'>
						<X className='stroke-light-error' />
					</InteractiveIcon>
					<div
						suppressContentEditableWarning
						className='shrink-0 p-3 w-full h-full'
						contentEditable='plaintext-only'
						aria-label='textarea'
						onKeyDown={(e) => {
							if (e.key === "Enter" && e.shiftKey)
								save(componentId!, inputMarkdown);
						}}
						onInput={(e) => {
							captureInput(e.currentTarget.textContent);
						}}
					>
						{markdown}
					</div>
					<Button
						className='bg-black text-white sticky bottom-0'
						onClick={() => save(componentId!, inputMarkdown)}
					>
						Save
					</Button>
				</Flex>
			</Modal>
		),
	};
}
