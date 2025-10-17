import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { useEditProjects } from "@/hooks/interface/dashboard/use-edit-projects.interface";
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
	const context = useAtomValue(useEditProjects.context_atom);
	return (
		<>
			{(context === "draft-project" || context === "update-project") && (
				<>
					{isOptionsVisible ? (
						<Flex className='place-content-center flex-wrap gap-3 absolute bg-light-surface top-0 inset-x-0 w-fit ml-auto z-10'>
							{children}
						</Flex>
					) : (
						<InteractiveIcon
							className='place-content-center flex-wrap gap-3 p-0 bg-light-surface absolute top-0 inset-x-0 w-fit ml-auto mr-3 mt-3 z-10'
							htmlProps={{
								onClick() {
									setIsOptionsVisible(true);
									document.onclick = () => {
										setIsOptionsVisible(false);
										document.onclick = null;
									};
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
