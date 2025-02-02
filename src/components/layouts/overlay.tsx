"use client";

import {
	content_hover_state_jotai,
	edit_portfolio_project_jotai,
	edit_profile_jotai,
	EditPortfolioProjectStates,
	EditProfileStates,
} from "@/data/atoms/ui_state";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { ReactNode } from "react";

interface Overlay {
	stateFlag: EditProfileStates | EditPortfolioProjectStates;
	children: ReactNode;
	className?: string;
}

export default function Overlay({ stateFlag, children, className }: Overlay) {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [edit_portfolio_project, edit_portfolio_project_setter] = useAtom(
		edit_portfolio_project_jotai,
	);
	return (
		<>
			<div
				className={cn(
					"inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 data-[is-shown=true]:fixed data-[is-shown=false]:hidden px-3",
					className,
				)}
				id='overlay'
				data-is-shown={
					false ||
					edit_portfolio_project === stateFlag ||
					edit_profile === stateFlag
				}
				onClick={(e) => {
					if ((e.target as HTMLElement).id === e.currentTarget.id)
						edit_profile_setter(null);
					edit_portfolio_project_setter(null);
				}}
			>
				{children}
			</div>
		</>
	);
}
