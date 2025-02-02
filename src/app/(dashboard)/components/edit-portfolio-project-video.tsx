import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import {
	content_hover_state_jotai,
	edit_portfolio_project_jotai,
} from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { VideoIcon, X } from "lucide-react";
import React from "react";

export default function EditPortfolioProjectVideo() {
	const [edit_portfolio_project, edit_portfolio_project_setter] = useAtom(
		edit_portfolio_project_jotai,
	);
	console.log(edit_portfolio_project);

	const content_hover_state_setter = useSetAtom(content_hover_state_jotai);
	return (
		<>
			<InteractiveIcon
				className='outline'
				htmlProps={{
					onMouseEnter() {
						content_hover_state_setter("hover-video-icon");
					},
					onMouseLeave() {
						content_hover_state_setter(null);
					},
					onClick() {
						edit_portfolio_project_setter("edit-portfolio-project-video");
						alert("I was clicked");
					},
				}}
			>
				<VideoIcon />
			</InteractiveIcon>
			<Overlay
				stateFlag='edit-portfolio-project-video'
				className='flex justify-center items-center relative'
			>
				<Flex flex='column' className='bg-light-surface gap-3 basis-[720px]'>
					<Flex className='justify-between items-center'>
						<Flex flex='column'>
							<h2 className='text-2xl font-semibold'>Edit your title</h2>
							<p>
								Enter a single sentence description of your professional
								skills/experience (e.g. Expert Web Designer with Ajax
								experience)
							</p>
						</Flex>
						<InteractiveIcon
							callback={() => edit_portfolio_project_setter(null)}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<div
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							edit_portfolio_project_setter(null);
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='text'
							id='title'
							required
							// value={profile_title}
							onChange={(e) => {
								// profile_title_setter(e.target.value);
							}}
							className='outline p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</div>
				</Flex>
			</Overlay>
		</>
	);
}
