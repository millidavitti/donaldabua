import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import {
	portfolio_project_content_jotai,
	portfolio_project_description_jotai,
	portfolio_project_tech_stack_jotai,
	portfolio_project_thumbnail_jotai,
	portfolio_project_title_jotai,
} from "@/data/atoms/app_data";
import { portfolio_project_form_step_jotai } from "@/data/atoms/ui_state";
import { useAtomValue, useSetAtom } from "jotai";
import { ArrowLeftIcon, X } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button";
import ContentBuilderImage from "./content-builder-image";
import { createId } from "@paralleldrive/cuid2";
import ContentBuilderVideo from "./content-builder-video";
import ContentBuilderText from "./content-builder-text";
import Image from "next/image";

export default function PreviewProjectDraft() {
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);
	const portfolio_project_content = useAtomValue(
		portfolio_project_content_jotai,
	);
	const portfolio_project_tech_stack = useAtomValue(
		portfolio_project_tech_stack_jotai,
	);
	const portfolio_project_description = useAtomValue(
		portfolio_project_description_jotai,
	);
	const portfolio_project_title = useAtomValue(portfolio_project_title_jotai);
	const portfolio_project_thumbnail = useAtomValue(
		portfolio_project_thumbnail_jotai,
	);

	return (
		<Flex
			flex='column'
			className='bg-light-surface gap-3 w-full max-h-[95%] neonScan'
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
				<Flex flex='column' className='shrink-0 gap-3'>
					<label className='text-xl font-semibold' htmlFor='title'>
						Project Title
					</label>
					<p>{portfolio_project_title}</p>
				</Flex>

				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px]'>
						{/* Project Description */}
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Project Description
						</label>
						<p>{portfolio_project_description}</p>

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

						{/* Thumbnail */}
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Thumbnail
						</label>

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
					{/* Content Preview */}
					<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
						{portfolio_project_content
							.sort((a, b) => a.position - b.position)
							.map((component) => {
								if (component.type === "image")
									return (
										<ContentBuilderImage
											component={component}
											key={createId()}
										/>
									);
								else if (component.type === "video")
									return (
										<ContentBuilderVideo
											component={component}
											key={createId()}
										/>
									);
								else if (component.type === "text")
									return (
										<ContentBuilderText
											component={component}
											key={createId()}
										/>
									);
							})}
					</Flex>
				</Flex>
				<Button type='button' className='bg-black text-light-surface'>
					Publish
				</Button>
			</Flex>
		</Flex>
	);
}
