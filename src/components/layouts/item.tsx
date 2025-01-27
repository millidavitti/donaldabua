import { MouseEventHandler, ReactNode } from "react";
import Flex from "./flex";
import { cn } from "@/utils/cn";

interface Item {
	children: ReactNode;
	isSelected?: boolean;
	className?: string;
	onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function Item({
	children,
	isSelected,
	className,
	onClick,
}: Item) {
	return (
		<Flex
			flex='row'
			className={cn(
				"p-3 py-2 rounded-lg cursor-pointer gap-3 data-[is-selected=true]:bg-light-primary-primary-container text-light-primary-on-primary-container text data-[is-selected=true]:font-semibold active:scale-95 transition shrink-0 w-fit md:w-full",
				className,
			)}
			htmlProps={{
				...{ "data-is-selected": isSelected },
				onClick,
			}}
		>
			{children}
		</Flex>
	);
}
