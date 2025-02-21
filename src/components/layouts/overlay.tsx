"use client";

import {
	edit_project_jotai,
	edit_profile_jotai,
	EditProjectStates,
	EditProfileStates,
} from "@/data/atoms/ui_state";
import {
	EDIT_PORTFOLIO_PROJECT_STATES,
	EDIT_PROFILE_STATES,
} from "@/data/constants";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { ReactNode } from "react";

interface Overlay {
	stateFlag: EditProfileStates | EditProjectStates;
	children: ReactNode;
	className?: string;
}

export default function Overlay({ stateFlag, children, className }: Overlay) {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [edit_project, edit_project_setter] = useAtom(edit_project_jotai);

	return (
		<>
			{(stateFlag === edit_project || stateFlag === edit_profile) && (
				<div
					className={cn(
						"inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 data-[is-shown=true]:fixed data-[is-shown=false]:hidden p-3",
						className,
					)}
					id={stateFlag!}
					data-is-shown={
						stateFlag === edit_project || stateFlag === edit_profile
					}
					onClick={(e) => {
						if (EDIT_PROFILE_STATES.includes((e.target as HTMLElement).id))
							edit_profile_setter(null);
						else if (
							EDIT_PORTFOLIO_PROJECT_STATES.includes(
								(e.target as HTMLElement).id,
							)
						)
							edit_project_setter(null);
					}}
				>
					{children}
				</div>
			)}
		</>
	);
}
