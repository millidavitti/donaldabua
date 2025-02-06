"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import {
	edit_profile_jotai,
	portfolio_project_form_step_jotai,
} from "@/data/atoms/ui_state";
import { useAtomValue, useSetAtom } from "jotai";
import { CirclePlus } from "lucide-react";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import DraftProjectInfo from "./draft-project-info";
import PreviewProjectDraft from "./preview-project-draft";
import ContentBuilder from "./content-builder";

export default function EditPortfolio() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const portfolio_project_form_step = useAtomValue(
		portfolio_project_form_step_jotai,
	);
	const portfolio_project_data = useAtomValue(portfolio_project_data_jotai);
	console.log(portfolio_project_data);

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
				{portfolio_project_form_step === "draft-project-info" && (
					<DraftProjectInfo>
						<ContentBuilder />
					</DraftProjectInfo>
				)}
				{portfolio_project_form_step === "preview-project-draft" && (
					<PreviewProjectDraft />
				)}
			</Overlay>
		</>
	);
}
