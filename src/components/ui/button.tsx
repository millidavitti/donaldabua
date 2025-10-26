import { cn } from "@/utils/cn";
import { HTMLProps, ReactNode } from "react";
interface Button extends Omit<HTMLProps<HTMLButtonElement>, "classID"> {
	children: ReactNode;
	className?: string;
	type?: "button" | "submit" | "reset";
}
export default function Button({
	children,
	className,
	type,
	...props
}: Button) {
	return (
		<button
			type={type}
			className={cn(
				"flex justify-center gap-3 border border-border p-3 py-2 title-medium active:scale-[.99] transition shrink-0 cursor-pointer",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
