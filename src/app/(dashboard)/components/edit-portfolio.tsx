"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { ArrowLeftIcon, CirclePlus, X } from "lucide-react";
import ProjectContentOptions from "./project-content-options";
import { useState } from "react";

export default function EditPortfolio() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [formStep, setFormStep] = useState<
		"draft-project-info" | "preview-project-draft"
	>("draft-project-info");

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
				{formStep === "draft-project-info" && (
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
							<Button
								onClick={() => {
									setFormStep("preview-project-draft");
								}}
								className='bg-black text-light-surface'
							>
								Next
							</Button>
						</form>
					</Flex>
				)}
				{formStep === "preview-project-draft" && (
					<Flex
						flex='column'
						className='bg-light-surface gap-3 w-full max-h-[80%]'
					>
						{/* Header */}
						<Flex className='justify-between items-center shrink-0'>
							<InteractiveIcon
								callback={() => setFormStep("draft-project-info")}
							>
								<ArrowLeftIcon size={24} />
							</InteractiveIcon>
						</Flex>

						<Flex flex='column' className='gap-3'>
							{/* Project Title */}
							<label className='text-xl font-semibold shrink-0' htmlFor='title'>
								Project Title
							</label>
							<p>Lorem, ipsum dolor.</p>

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
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Dolore accusamus ipsum soluta sequi fuga aspernatur?
									</p>
									<label
										className='text-xl font-semibold shrink-0'
										htmlFor='title'
									>
										Tech Stack
									</label>
									<Flex className='shrink-0'></Flex>
								</Flex>
								{/* Content OPtions */}
								<ProjectContentOptions />
							</Flex>
							<Button type='button' className='bg-black text-light-surface'>
								Publish
							</Button>
						</Flex>
					</Flex>
				)}
			</Overlay>
		</>
	);
}
