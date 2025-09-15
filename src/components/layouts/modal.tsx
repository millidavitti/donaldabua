"use client";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface Modal {
	children: ReactNode;
	className?: string;
}

export default function Modal({ children, className }: Modal) {
	return (
		<div
			className={cn(
				"inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 fixed p-3 flex justify-center items-center",
				className,
			)}
		>
			{children}
		</div>
	);
}
