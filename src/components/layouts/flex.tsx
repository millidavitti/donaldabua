import { cn } from "@/utils/cn";
import { HTMLProps, ReactNode } from "react";

interface FlexColumn {
	children?: ReactNode;
	className?: string;
	htmlProps?: Partial<HTMLProps<HTMLDivElement>>;
	flex?: "row" | "column";
}
export default function Flex({
	children,
	className,
	htmlProps,
	flex = "column",
}: FlexColumn) {
	return (
		<>
			{flex === "column" && (
				<div
					className={cn(
						"flex flex-col p-3 outline-2 overflow-y-auto",
						className,
					)}
					{...htmlProps}
				>
					{children}
				</div>
			)}
			{flex === "row" && (
				<div
					className={cn(
						"flex flex-row p-3 outline-2 overflow-x-auto",
						className,
					)}
					{...htmlProps}
				>
					{children}
				</div>
			)}
		</>
	);
}
