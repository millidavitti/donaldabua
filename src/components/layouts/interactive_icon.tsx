import { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface InteractiveIcon {
	children: ReactNode;
	className?: string;
	callback?: MouseEventHandler<HTMLDivElement> | undefined;
}
export default function InteractiveIcon({
	children,
	className,
	callback,
}: InteractiveIcon) {
	return (
		<div
			className={cn(
				"p-3 cursor-pointer active:scale-95 transition stroke-light-surface-on-surface",
				className,
			)}
			onClick={callback}
		>
			{children}
		</div>
	);
}
