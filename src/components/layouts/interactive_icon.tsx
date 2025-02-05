import { HTMLProps, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface InteractiveIcon {
	children: ReactNode;
	className?: string;
	callback?: MouseEventHandler<HTMLDivElement> | undefined;
	htmlProps?: Partial<HTMLProps<HTMLDivElement>>;
}
export default function InteractiveIcon({
	children,
	className,
	callback,
	htmlProps,
}: InteractiveIcon) {
	return (
		<div
			className={cn(
				"p-1 cursor-pointer active:scale-95 transition stroke-light-surface-on-surface shrink-0",
				className,
			)}
			onClick={callback}
			{...htmlProps}
		>
			{children}
		</div>
	);
}
