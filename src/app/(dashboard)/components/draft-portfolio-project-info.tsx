import React, { ReactNode } from "react";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import AddPortfolioProjectTitle from "./portfolio-project/add-portfolio-project-title";
import AddPortfolioProjectDescription from "./portfolio-project/add-portfolio-project-description";
import AddPortfolioProjectTechStack from "./portfolio-project/add-portfolio-project-tech-stack";
import AddPortfolioProjectThumbnail from "./portfolio-project/add-portfolio-project-thumbnail";

interface DraftPortfolioProjectInfo {
	children: ReactNode;
}
export default function DraftPortfolioProjectInfo({
	children,
}: DraftPortfolioProjectInfo) {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const portfolio_project_form_step_setter = useSetAtom(
		portfolio_project_form_step_jotai,
	);

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
				<AddPortfolioProjectTitle />
				<Flex className='gap-3 flex-wrap'>
					<Flex flex='column' className='grow gap-3 basis-[360px] h-fit'>
						<AddPortfolioProjectDescription />
						<AddPortfolioProjectTechStack />
						<AddPortfolioProjectThumbnail />
					</Flex>
					{children}
				</Flex>
				<Button
					onClick={() => {
						const formElements = document.querySelectorAll(
							"[id^='portfolio-project']",
						);
						formElements.forEach((el) => {
							const field = (el as HTMLInputElement).validity;

							if (!field.valid) {
								el.classList.add("outline-red-800");
								el.scrollIntoView({ behavior: "smooth" });
							}
						});
						if (
							Array.from(formElements).every(
								(el) => (el as HTMLInputElement).validity.valid === true,
							)
						)
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
