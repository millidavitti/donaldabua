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
	flex = "row",
}: FlexColumn) {
	return (
		<>
			{flex === "column" && (
				<div
					className={cn(
						"flex flex-col p-3 outline-2 outline overflow-y-auto",
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
						"flex flex-row p-3 outline-2 outline overflow-x-auto",
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
