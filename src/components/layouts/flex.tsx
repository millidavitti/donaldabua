import { cn } from "@/utils/cn";
import { HTMLProps, ReactNode } from "react";

interface FlexColumn {
	children?: ReactNode;
	className?: string;
	htmlProps?: Partial<HTMLProps<HTMLDivElement>>;
	flex?: "row" | "column";
	debug?: boolean;
}
export default function Flex({
	children,
	className,
	htmlProps,
	flex = "row",
	debug = false,
}: FlexColumn) {
	return (
		<>
			{flex === "column" && (
				<div
					className={cn(
						"flex flex-col p-3 border border-border overflow-y-auto",
						className,
						debug && "p-3 outline-1 outline",
					)}
					{...htmlProps}
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
					{...htmlProps}
				>
					{children}
				</div>
			)}
		</>
	);
}
