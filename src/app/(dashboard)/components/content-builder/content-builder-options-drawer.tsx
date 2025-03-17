import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { project_form_step_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtomValue } from "jotai";
import { EllipsisIcon } from "lucide-react";
import { ReactNode, useState } from "react";

interface ContentBuilderOptionsDrawer {
	children: ReactNode;
}
export default function ContentBuilderOptionsDrawer({
	children,
}: ContentBuilderOptionsDrawer) {
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);
	const project_form_step = useAtomValue(project_form_step_jotai);
	return (
		<>
			{project_form_step === "draft-project-info" && (
				<>
					{isOptionsVisible ? (
						<Flex
							className='place-content-center flex-wrap gap-3 absolute bg-light-surface top-0 inset-x-0 w-fit ml-auto neonScan z-10'
							htmlProps={{
								onMouseLeave() {
									setIsOptionsVisible(false);
								},
							}}
						>
							{children}
						</Flex>
					) : (
						<InteractiveIcon
							className='place-content-center flex-wrap gap-3 p-0 bg-light-surface absolute top-0 inset-x-0 w-fit ml-auto mr-3 mt-3 z-10'
							htmlProps={{
								onClick() {
									setIsOptionsVisible(true);
								},
							}}
						>
							<EllipsisIcon />
						</InteractiveIcon>
					)}
				</>
			)}
		</>
	);
}
