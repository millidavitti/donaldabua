"use client";

import {
	edit_project_jotai,
	edit_profile_jotai,
	EditProjectStates,
	EditProfileStates,
	settings_view_jotai,
	SettingsView,
} from "@/data/atoms/ui_state";
import {
	EDIT_PROJECT_STATES,
	EDIT_PROFILE_STATES,
	SETTINGS_VIEW,
} from "@/data/constants";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { ReactNode } from "react";

interface Overlay {
	stateFlag: EditProfileStates | EditProjectStates | SettingsView;
	children: ReactNode;
	className?: string;
}

export default function Overlay({ stateFlag, children, className }: Overlay) {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [edit_project, edit_project_setter] = useAtom(edit_project_jotai);
	const [settings_view, settings_view_setter] = useAtom(settings_view_jotai);
	const view =
		stateFlag === settings_view ||
		stateFlag === edit_project ||
		stateFlag === edit_profile;
	return (
		<>
			{view && (
				<div
					className={cn(
						"inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 data-[is-shown=true]:fixed data-[is-shown=false]:hidden p-3 flex justify-center items-center",
						className,
					)}
					id={stateFlag!}
					data-is-shown={view}
					onClick={(e) => {
						if (
							EDIT_PROFILE_STATES.includes(
								(e.target as HTMLElement).id as EditProfileStates,
							)
						)
							edit_profile_setter(null);
						else if (
							EDIT_PROJECT_STATES.includes(
								(e.target as HTMLElement).id as EditProjectStates,
							)
						)
							edit_project_setter(null);
						else if (
							SETTINGS_VIEW.includes(
								(e.target as HTMLElement).id as SettingsView,
							)
						)
							settings_view_setter(null);
					}}
				>
					{children}
				</div>
			)}
		</>
	);
}
