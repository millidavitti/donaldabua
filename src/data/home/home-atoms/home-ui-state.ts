import { atom } from "jotai";
import { VAULT_VIEWS } from "../home-constants";

export type DashboardView = (typeof VAULT_VIEWS)[number];
export const dashboard_view_jotai = atom<DashboardView>(null);

export const content_hover_state_jotai = atom<
	"hover-image-icon" | "hover-video-icon" | "hover-text-icon" | null
>(null);

export const project_form_step_jotai = atom<
	"draft-project-info" | "preview-project-draft" | null
>(null);

export const component_to_edit_jotai = atom<string | null>(null);

export type ApiTask =
	| "publish-project"
	| "save-published-project-edit"
	| "save-technologies-edit"
	| "create-profile"
	| "create-technologies"
	| "add-social-account"
	| "update-social-account"
	| "sign-out"
	| null;
export const api_task_jotai = atom<ApiTask>(null);

export type Dialog = "cancel" | "continue" | null;
export const dialog_jotai = atom<Dialog>(null);
