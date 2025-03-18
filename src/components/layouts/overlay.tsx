"use client";

import {
	project_draft_view_jotai,
	dashboard_view_jotai,
	ProjectDraftView,
	DashboardView,
	settings_view_jotai,
	SettingsView,
} from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import {
	PROJECT_DRAFT_VIEWS,
	DASHBOARD_VIEWS,
	SETTINGS_VIEWS,
} from "@/data/dashboard/dashboard-constants";
import {
	vault_view_jotai,
	VaultView,
} from "@/data/home/home-atoms/home-ui-state";
import { VAULT_VIEWS } from "@/data/home/home-constants";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { ReactNode } from "react";

interface Overlay {
	stateFlag: DashboardView | ProjectDraftView | SettingsView | VaultView;
	children: ReactNode;
	className?: string;
}

export default function Overlay({ stateFlag, children, className }: Overlay) {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [vault_view, vault_view_setter] = useAtom(vault_view_jotai);
	const [project_draft_view, project_draft_view_setter] = useAtom(
		project_draft_view_jotai,
	);
	const [settings_view, settings_view_setter] = useAtom(settings_view_jotai);
	const view =
		stateFlag === null
			? false
			: stateFlag === settings_view ||
			  stateFlag === project_draft_view ||
			  stateFlag === vault_view ||
			  stateFlag === dashboard_view;

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
							DASHBOARD_VIEWS.includes(
								(e.target as HTMLElement).id as DashboardView,
							) ||
							VAULT_VIEWS.includes((e.target as HTMLElement).id as VaultView)
						) {
							dashboard_view_setter(null);
							vault_view_setter(null);
						} else if (
							PROJECT_DRAFT_VIEWS.includes(
								(e.target as HTMLElement).id as ProjectDraftView,
							)
						)
							project_draft_view_setter(null);
						else if (
							SETTINGS_VIEWS.includes(
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
