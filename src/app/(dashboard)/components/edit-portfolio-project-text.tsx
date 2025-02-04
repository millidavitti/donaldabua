import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import {
	content_hover_state_jotai,
	edit_portfolio_project_jotai,
} from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { Text, X } from "lucide-react";

export default function EditPortfolioProjectText() {
	const edit_portfolio_project_setter = useSetAtom(
		edit_portfolio_project_jotai,
	);
	const content_hover_state_setter = useSetAtom(content_hover_state_jotai);
	return (
		<>
			<InteractiveIcon
				className='outline'
				htmlProps={{
					onMouseEnter() {
						content_hover_state_setter("hover-text-icon");
					},
					onMouseLeave() {
						content_hover_state_setter(null);
					},
					onClick() {
						edit_portfolio_project_setter("edit-portfolio-project-text");
					},
				}}
			>
				<Text />
			</InteractiveIcon>
			<Overlay
				stateFlag='edit-portfolio-project-text'
				className='flex justify-center items-center'
			>
				<Flex flex='column' className='bg-light-surface gap-3 basis-[720px]'>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Markdown</h2>
						<InteractiveIcon
							callback={() => edit_portfolio_project_setter(null)}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Nested Form */}
					<Flex flex='column' className='gap-3'>
						<textarea id='title' required rows={10} className='outline p-3' />
						<Button className='bg-black text-light-surface'>Add</Button>
					</Flex>
				</Flex>
			</Overlay>
		</>
	);
}
