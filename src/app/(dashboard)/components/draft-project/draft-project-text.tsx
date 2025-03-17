import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { project_content_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import {
	content_hover_state_jotai,
	project_draft_view_jotai,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { cn } from "@/utils/cn";
import { createId } from "@paralleldrive/cuid2";
import { useSetAtom } from "jotai";
import { Text, X } from "lucide-react";
import React, { useState } from "react";

export default function DraftProjectMarkdown() {
	const project_draft_view_setter = useSetAtom(project_draft_view_jotai);
	const content_hover_state_setter = useSetAtom(content_hover_state_jotai);
	const project_content_setter = useSetAtom(project_content_jotai);
	const [markdown, setMarkdown] = useState("");
	return (
		<>
			<InteractiveIcon
				className='outline grow flex place-content-center'
				htmlProps={{
					onMouseEnter() {
						content_hover_state_setter("hover-text-icon");
					},
					onMouseLeave() {
						content_hover_state_setter(null);
					},
					onClick() {
						project_draft_view_setter("edit-project-markdown");
					},
				}}
			>
				<Text />
			</InteractiveIcon>
			<Overlay
				stateFlag='edit-project-markdown'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Markdown</h2>
						<InteractiveIcon callback={() => project_draft_view_setter(null)}>
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
								"outline p-3 valid:outline-emerald-800",
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
									project_content_setter((content) => [
										...content,
										{
											id: createId(),
											markdown,
											position: content.length,
											type: "markdown",
										},
									]);
								setMarkdown("");
								project_draft_view_setter(null);
							}}
						>
							Add
						</Button>
					</Flex>
				</Flex>
			</Overlay>
		</>
	);
}
