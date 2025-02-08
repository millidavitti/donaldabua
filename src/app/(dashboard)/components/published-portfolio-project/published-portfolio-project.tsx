import Flex from "@/components/layouts/flex";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import Image from "next/image";
import React from "react";
import {
	PortfolioProjectData,
	selected_portfolio_project_jotai,
} from "@/data/atoms/app_data";

interface PublishedPortfolioProject {
	project: PortfolioProjectData;
}
export default function PublishedPortfolioProject({
	project,
}: PublishedPortfolioProject) {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const selected_portfolio_project_setter = useSetAtom(
		selected_portfolio_project_jotai,
	);
	return (
		<>
			<Flex
				flex='column'
				className='shrink-0 gap-3 h-fit grow basis-52 cursor-pointer active:scale-[.98] transition'
				htmlProps={{
					onClick() {
						edit_profile_setter("view-portfolio-project");
						selected_portfolio_project_setter(project);
					},
				}}
			>
				<Flex className='w-full h-40 shrink-0'>
					<Image
						src={project.thumbnail}
						width={1000}
						height={1000}
						alt='portfolio-project-thumbnail'
						className='neonScan object-cover'
					/>
				</Flex>
				<p className='text-lg font-semibold'>{project.title}</p>
			</Flex>
		</>
	);
}
