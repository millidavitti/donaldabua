import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import { portfolio_project_form_step_jotai } from "@/data/atoms/ui_state";
import { useAtomValue, useSetAtom } from "jotai";
import { ArrowLeftIcon, X } from "lucide-react";
import React from "react";
import ProjectContentOptions from "./project-content-options";
import Button from "@/components/ui/button";

export default function PreviewProjectDraft() {
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);
	const portfolio_project_data = useAtomValue(portfolio_project_data_jotai);
	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[80%] neonScan'
		>
			{/* Header */}
			<Flex className='justify-between items-center shrink-0'>
				<InteractiveIcon
					callback={() =>
						portfolio_project_form_step_setter("draft-project-info")
					}
				>
					<ArrowLeftIcon size={24} />
				</InteractiveIcon>
			</Flex>

			<Flex flex='column' className='gap-3'>
				{/* Project Title */}
				<label className='text-xl font-semibold shrink-0' htmlFor='title'>
					Project Title
				</label>
				<p>{portfolio_project_data.title}</p>

				{/* Project Description, Tech Stack, Content */}
				<Flex className='gap-3 flex-wrap'>
					{/* Project Description, Tech Stack */}
					<Flex flex='column' className='grow gap-3 basis-[360px]'>
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Project Description
						</label>
						<p>{portfolio_project_data.description}</p>
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
					</Flex>
					{/* Content OPtions */}
					<ProjectContentOptions />
				</Flex>
				<Button type='button' className='bg-black text-light-surface'>
					Publish
				</Button>
			</Flex>
		</Flex>
	);
}
