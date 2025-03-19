import { cn } from "@/utils/cn";
import React, { HTMLProps, MouseEventHandler, ReactNode } from "react";
interface Button {
	children: ReactNode;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	htmlProps?: Partial<HTMLProps<HTMLButtonElement>>;
	type?: "button" | "submit";
}
export default function Button({
	children,
	className,
	onClick,
	type = "button",
	htmlProps,
}: Button) {
	return (
		<button
			{...htmlProps}
			type={type}
			className={cn(
				"flex justify-center gap-3 border border-border p-3 py-2 title-medium active:scale-[.99] transition shrink-0",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
