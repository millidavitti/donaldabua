"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { CirclePlus, X } from "lucide-react";
import ProjectContentOptions from "./project-content-options";

export default function EditPortfolio() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);

	return (
		<>
			<Flex flex='column' className='basis-40 grow shrink-0'>
				<Flex className='h-fit items-center justify-between'>
					<p className='font-semibold lg:text-2xl'>Portfolio</p>
					<InteractiveIcon
						callback={() => {
							edit_profile_setter("edit-portfolio");
						}}
					>
						<CirclePlus size={24} />
					</InteractiveIcon>
				</Flex>
			</Flex>
			<Overlay
				stateFlag='edit-portfolio'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 w-full max-h-[80%]'
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
						<input type='text' required className='outline p-3' />

						{/* Project Description, Tech Stack, Content */}
						<Flex className='gap-3 flex-wrap'>
							{/* Project Description, Tech Stack */}
							<Flex flex='column' className='grow gap-3 basis-[360px]'>
								<label
									className='text-xl font-semibold shrink-0'
									htmlFor='title'
								>
									Project Description
								</label>
								<input type='text' required className='outline p-3' />
								<label
									className='text-xl font-semibold shrink-0'
									htmlFor='title'
								>
									Tech Stack
								</label>
								<input type='text' required className='outline p-3' />
							</Flex>
							{/* Content OPtions */}
							<ProjectContentOptions />
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
