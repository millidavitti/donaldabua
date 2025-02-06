import React, { ReactNode } from "react";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import {
	portfolio_project_description_jotai,
	portfolio_project_tech_stack_jotai,
	portfolio_project_thumbnail_jotai,
	portfolio_project_title_jotai,
} from "@/data/atoms/app_data";
import Image from "next/image";

interface DraftProjectInfo {
	children: ReactNode;
}
export default function DraftProjectInfo({ children }: DraftProjectInfo) {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);

	const [portfolio_project_tech_stack, portfolio_project_tech_stack_setter] =
		useAtom(portfolio_project_tech_stack_jotai);
	const [portfolio_project_description, portfolio_project_description_setter] =
		useAtom(portfolio_project_description_jotai);
	const [portfolio_project_title, portfolio_project_title_setter] = useAtom(
		portfolio_project_title_jotai,
	);
	const [portfolio_project_thumbnail, portfolio_project_thumbnail_setter] =
		useAtom(portfolio_project_thumbnail_jotai);

	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[90%] neonScan'
		>
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
					className='outline p-3 shrink-0'
					value={portfolio_project_title}
					onChange={(e) => {
						portfolio_project_title_setter(e.target.value);
					}}
				/>

				{/* Project Description, Tech Stack, Content */}
				<Flex className='gap-3 flex-wrap'>
					{/* Project Description, Tech Stack */}
					<Flex flex='column' className='grow gap-3 basis-[360px] h-fit'>
						{/* Project Description */}
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Project Description
						</label>
						<input
							type='text'
							required
							className='outline p-3'
							value={portfolio_project_description}
							onChange={(e) => {
								portfolio_project_description_setter(e.target.value);
							}}
						/>

						{/* Tech Stack */}
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Tech Stack
						</label>
						<Flex className='gap-3 flex-wrap shrink-0'>
							{portfolio_project_tech_stack.map((tech) => (
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
										portfolio_project_tech_stack_setter((stack) => [
											...stack,
											(e.target as HTMLInputElement).value,
										]);
									(e.target as HTMLInputElement).value = "";
								}
							}}
						/>
						{/* Thumbnail */}
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Thumbnail
						</label>
						<input
							type='url'
							required
							className='outline p-3'
							value={portfolio_project_thumbnail}
							onChange={(e) => {
								portfolio_project_thumbnail_setter(e.target.value);
							}}
						/>
						{portfolio_project_thumbnail && (
							<Image
								src={portfolio_project_thumbnail}
								width={1000}
								height={1000}
								alt='thumbnail'
								data-is-visible={Boolean(portfolio_project_thumbnail)}
								className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline neonScan'
							/>
						)}
					</Flex>

					{children}
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
