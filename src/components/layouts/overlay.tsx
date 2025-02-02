"use client";

import {
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
				id={stateFlag!}
				data-is-shown={
					stateFlag === edit_portfolio_project || stateFlag === edit_profile
				}
				onClick={(e) => {
					if (e.currentTarget.id === (e.target as HTMLElement).id)
						edit_profile_setter(null);
				}}
			>
				{children}
			</div>
		</>
	);
}
