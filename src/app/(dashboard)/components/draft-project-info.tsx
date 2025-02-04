import React from "react";
import ProjectContentOptions from "./project-content-options";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import ContentBuilder from "./content-builder";

export default function DraftProjectInfo() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);
	const [portfolio_project_data, portfolio_project_data_setter] = useAtom(
		portfolio_project_data_jotai,
	);
	return (
		<Flex flex='column' className='bg-light-surface gap-3 w-full max-h-[90%]'>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<h2 className='text-2xl font-semibold'>Add New Project</h2>
				<InteractiveIcon callback={() => edit_profile_setter(null)}>
					<X size={24} className='stroke-light-error' />
				</InteractiveIcon>
			</Flex>

			<form
				className='flex flex-col gap-3'
				onSubmit={(e) => {
					e.preventDefault();
					edit_profile_setter(null);
				}}
			>
				{/* Project Title */}
				<label className='text-xl font-semibold shrink-0' htmlFor='title'>
					Project Title
				</label>
				<input
					type='text'
					required
					className='outline p-3'
					value={portfolio_project_data.title}
					onChange={(e) => {
						portfolio_project_data_setter((data) => ({
							...data,
							title: e.target.value,
						}));
					}}
				/>

				{/* Project Description, Tech Stack, Content */}
				<Flex className='gap-3 flex-wrap'>
					{/* Project Description, Tech Stack */}
					<Flex
						flex='column'
						className='grow gap-3 basis-[360px] h-fit sticky top-0'
					>
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Project Description
						</label>
						<input
							type='text'
							required
							className='outline p-3'
							value={portfolio_project_data.description}
							onChange={(e) => {
								portfolio_project_data_setter((data) => ({
									...data,
									description: e.target.value,
								}));
							}}
						/>
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Tech Stack
						</label>
						<Flex className='gap-3 flex-wrap shrink-0'>
							{portfolio_project_data.techStack.map((tech) => (
								<Flex className='gap-3 items-center' key={tech}>
									<p className='shrink-0 font-medium'>{tech}</p>
									<X
										size={24}
										className='stroke-light-error cursor-pointer active:scale-[.95]'
									/>
								</Flex>
							))}
						</Flex>
						<input
							type='text'
							required
							className='outline p-3'
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									if ((e.target as HTMLInputElement).value)
										portfolio_project_data_setter((data) => ({
											...data,
											techStack: [
												...data.techStack,
												(e.target as HTMLInputElement).value,
											],
										}));
									(e.target as HTMLInputElement).value = "";
								}
							}}
						/>
					</Flex>
					<ContentBuilder />
				</Flex>
				<Button
					onClick={() => {
						portfolio_project_form_step_setter("preview-project-draft");
					}}
					className='bg-black text-light-surface'
				>
					Next
				</Button>
			</form>
		</Flex>
	);
}
