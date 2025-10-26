import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { useAtomValue } from "jotai";
import { EllipsisIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { usePortfolio } from "../profile/interfaces/use-portfolio.interface";

interface ContentBuilderOptionsDrawer {
	children: ReactNode;
}
export default function ContentBuilderOptionsDrawer({
	children,
}: ContentBuilderOptionsDrawer) {
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);
	const context = useAtomValue(usePortfolio.context_atom);
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
							onClick={() => {
								setIsOptionsVisible(true);
								document.addEventListener(
									"click",
									() => setIsOptionsVisible(false),
									{
										once: true,
									},
								);
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
