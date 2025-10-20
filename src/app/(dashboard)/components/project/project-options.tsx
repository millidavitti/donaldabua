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
			<Flex
				className={cn(
					"relative shrink-0 border-l-0 border-b-0 ml-auto w-[48px] overflow-clip h-[48px] group-hover:border-black",
					isOptionsVisible && "border-none w-[96px]",
				)}
			>
				{isOptionsVisible ? (
					<Flex
						className={cn(
							"justify-end bg-none flex-wra absolute top-0 inset-x-0 w-[96px] ml-auto border-l-0 border-b-0 p-0",
						)}
					>
						{children}
					</Flex>
				) : (
					<InteractiveIcon
						className='place-content-center flex-wrap gap-3 p-0 top-0 inset-x-0 w-fit ml-auto'
						id='view-options'
						onClick={() => {
							setIsOptionsVisible(true);
							document.addEventListener(
								"click",
								() => setIsOptionsVisible(false),
								{ once: true },
							);
						}}
					>
						<EllipsisIcon size={24} className='active:scale-[0.95]' />
					</InteractiveIcon>
				)}
			</Flex>
		</>
	);
}
