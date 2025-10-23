import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { input_project_content_atom } from "@/data/dashboard/dashboard-atoms/data";
import { content_hover_state_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-ui-state";
import { cn } from "@/utils/cn";
import { createId } from "@paralleldrive/cuid2";
import { useSetAtom } from "jotai";
import { X } from "lucide-react";
import { useState } from "react";

export default function useDraftMarkdown() {
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const set_content_hover_state = useSetAtom(content_hover_state_jotai);
	const [markdown, setMarkdown] = useState("");
	const [context, setContext] = useState<"add-project-video" | null>(null);

	const start = () => {
		setContext("add-project-video");
	};
	const add = (markdown: string) => {
		set_input_project_content((content) => [
			...content,
			{
				id: createId(),
				markdown,
				position: content.length,
				type: "markdown",
			},
		]);
		close();
	};
	const close = () => {
		setContext(null);
		setMarkdown("");
	};
	return {
		start,
		set_content_hover_state,
		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Markdown</h2>
						<InteractiveIcon callback={close}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Nested Form */}
					<Flex flex='column' className='gap-3'>
						<textarea
							id='add-portfolio-project-text'
							required
							minLength={500}
							className={cn(
								"border p-3 valid:outline-emerald-800",
								Boolean(markdown) && "invalid:outline-red-800",
							)}
							value={markdown}
							onChange={(e) => {
								setMarkdown(e.target.value);
							}}
							rows={10}
						/>
						<Button
							className='bg-black text-light-surface'
							onClick={() => {
								const formElement = document.querySelector(
									"#add-portfolio-project-text",
								);
								if ((formElement as HTMLInputElement).validity.valid)
									add(markdown);
							}}
						>
							Add
						</Button>
					</Flex>
				</Flex>
			</Modal>
		),
	};
}
