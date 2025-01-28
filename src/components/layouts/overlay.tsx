"use client";

import { edit_profile_jotai, EditProfileStates } from "@/data/atoms/ui_state";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { ReactNode } from "react";

interface Overlay {
	stateFlag: EditProfileStates;
	children: ReactNode;
	className?: string;
}

export default function Overlay({ stateFlag, children, className }: Overlay) {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);

	return (
		<>
			<div
				className={cn(
					"inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 data-[is-shown=true]:fixed data-[is-shown=false]:hidden",
					className,
				)}
				id='overlay'
				data-is-shown={edit_profile === stateFlag}
				onClick={(e) => {
					if ((e.target as HTMLElement).id === e.currentTarget.id)
						edit_profile_setter(null);
				}}
			>
				{children}
			</div>
		</>
	);
}
