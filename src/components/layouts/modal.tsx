"use client";
import { cn } from "@/utils/cn";
import { createId } from "@paralleldrive/cuid2";
import { ReactNode } from "react";

interface Modal {
	children: ReactNode;
	className?: string;
	close?: () => void;
}

export default function Modal({ children, className, close }: Modal) {
	return (
		<div
			id={createId()}
			className={cn(
				"inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 fixed p-3 flex justify-center items-center",
				className,
			)}
			onClick={(e) => {
				const modal = e.currentTarget;
				const target = e.target as HTMLElement;
				console.log(modal.id, target.id);
				if (modal.id !== target.id || !close) return;

				close();
			}}
		>
			{children}
		</div>
	);
}
