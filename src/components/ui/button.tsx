import { cn } from "@/utils/cn";
import React, { MouseEventHandler, ReactNode } from "react";
interface Button {
	children: ReactNode;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	type?: "button" | "submit";
}
export default function Button({ children, className, onClick, type }: Button) {
	return (
		<button
			type={type}
			className={cn(
				"outline p-3 py-2 title-medium active:scale-95 transition",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
