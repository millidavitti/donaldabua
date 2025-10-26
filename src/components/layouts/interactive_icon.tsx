import { HTMLProps, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface InteractiveIcon extends Omit<HTMLProps<HTMLDivElement>, "classID"> {
	children: ReactNode;
	className?: string;
	callback?: MouseEventHandler<HTMLDivElement> | undefined;
}
export default function InteractiveIcon({
	children,
	className,
	callback,
	...props
}: InteractiveIcon) {
	return (
		<div
			id='interactive-icon'
			className={cn(
				"flex p-1 cursor-pointer active:scale-95 transition stroke-light-surface-on-surface shrink-0",
				className,
			)}
			onClick={callback}
			{...props}
		>
			{children}
		</div>
	);
}
