import { cn } from "@/utils/cn";
import { HTMLProps, ReactNode } from "react";

interface Flex extends Omit<HTMLProps<HTMLDivElement>, "classID"> {
	children?: ReactNode;
	className?: string;
	flex?: "row" | "column";
	debug?: boolean;
}
export default function Flex({
	children,
	className,
	flex = "row",
	debug = false,
	...props
}: Flex) {
	return (
		<>
			{flex === "column" && (
				<div
					className={cn(
						"flex flex-col p-3 border border-border overflow-y-auto",
						className,
						debug && "p-3 outline-1 outline",
					)}
					{...props}
				>
					{children}
				</div>
			)}
			{flex === "row" && (
				<div
					className={cn(
						"flex flex-row p-3 border border-border overflow-x-auto",
						className,
						debug && "p-3 outline-1 outline",
					)}
					{...props}
				>
					{children}
				</div>
			)}
		</>
	);
}
