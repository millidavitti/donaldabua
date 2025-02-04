import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import {
	content_hover_state_jotai,
	edit_portfolio_project_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { Text, X } from "lucide-react";
import React, { useState } from "react";
import md from "md";
import parse from "html-react-parser";
export default function EditPortfolioProjectText() {
	const edit_portfolio_project_setter = useSetAtom(
		edit_portfolio_project_jotai,
	);
	const content_hover_state_setter = useSetAtom(content_hover_state_jotai);
	const [markdown, setMarkdown] = useState("");
	const portfolio_project_data_setter = useSetAtom(
		portfolio_project_data_jotai,
	);
	return (
		<>
			<InteractiveIcon
				className='outline'
				htmlProps={{
					onMouseEnter() {
						content_hover_state_setter("hover-text-icon");
					},
					onMouseLeave() {
						content_hover_state_setter(null);
					},
					onClick() {
						edit_portfolio_project_setter("edit-portfolio-project-text");
					},
				}}
			>
				<Text />
			</InteractiveIcon>
			<Overlay
				stateFlag='edit-portfolio-project-text'
				className='flex justify-center items-center'
			>
				<Flex flex='column' className='bg-light-surface gap-3 basis-[720px]'>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Markdown</h2>
						<InteractiveIcon
							callback={() => edit_portfolio_project_setter(null)}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Nested Form */}
					<Flex flex='column' className='gap-3'>
						<textarea
							id='title'
							required
							value={markdown}
							onChange={(e) => {
								setMarkdown(e.target.value);
							}}
							rows={10}
							className='outline p-3'
						>
							{parse(md(markdown))}
						</textarea>
						<Button
							className='bg-black text-light-surface'
							onClick={() => {
								portfolio_project_data_setter((data) => ({
									...data,
									content: [
										...data.content,
										{
											markdown,
											position: data.content.length,
											type: "text",
										},
									],
								}));
								setMarkdown("");
								edit_portfolio_project_setter(null);
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
