import { atom } from "jotai";
import {
	DASHBOARD_VIEWS,
	PROJECT_DRAFT_VIEWS,
	SETTINGS_VIEWS,
} from "../constants";

export type DashboardView = (typeof DASHBOARD_VIEWS)[number];
export const dashboard_view_jotai = atom<DashboardView>(null);

export type ProjectDraftView = (typeof PROJECT_DRAFT_VIEWS)[number];
export const project_draft_view_jotai = atom<ProjectDraftView>(null);

export type SettingsView = (typeof SETTINGS_VIEWS)[number];
export const settings_view_jotai = atom<SettingsView>(null);

export const content_hover_state_jotai = atom<
	"hover-image-icon" | "hover-video-icon" | "hover-text-icon" | null
>(null);

export const project_form_step_jotai = atom<
	"draft-project-info" | "preview-project-draft" | null
>(null);

export const component_to_edit_jotai = atom<string | null>(null);

export type APITask =
	| "publish_project"
	| "save_published_project_edit"
	| "save_technologies_edit"
	| "create_profile"
	| "create_technologies"
	| null;
export const api_task_jotai = atom<APITask>(null);
