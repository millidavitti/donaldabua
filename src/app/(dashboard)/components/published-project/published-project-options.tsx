import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { cn } from "@/utils/cn";
import { EllipsisIcon } from "lucide-react";
import { ReactNode, useState } from "react";

interface PublishedPortfolioProjectOptions {
	children: ReactNode;
}
export default function ProjectOptions({
	children,
}: PublishedPortfolioProjectOptions) {
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);

	return (
		<>
			<>
				{isOptionsVisible ? (
					<Flex
						className={cn(
							"place-content-center flex-wrap gap-3 absolute bg-light-surface top-0 inset-x-0 w-fit ml-auto",
						)}
					>
						{children}
					</Flex>
				) : (
					<InteractiveIcon
						className='place-content-center flex-wrap gap-3 p-0 bg-light-surface absolute top-0 inset-x-0 w-fit ml-auto mr-3 mt-3'
						htmlProps={{
							onClick() {
								setIsOptionsVisible(true);
								document.addEventListener(
									"click",
									() => setIsOptionsVisible(false),
									{ once: true },
								);
							},
						}}
					>
						<EllipsisIcon />
					</InteractiveIcon>
				)}
			</>
		</>
	);
}
