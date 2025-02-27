import { atom } from "jotai";

export type EditProfileStates =
	| "edit-image"
	| "edit-location"
	| "edit-name"
	| "edit-video"
	| "edit-hours-per-week"
	| "edit-title"
	| "edit-hourly-rate"
	| "edit-profile-overview"
	| "edit-profile-technologies"
	| "edit-employment-history"
	| "edit-socials"
	| "edit-portfolio"
	| "edit-published-project"
	| "view-project"
	| null;
export const edit_profile_jotai = atom<EditProfileStates>(null);

export type EditProjectStates =
	| "edit-project-video"
	| "edit-project-image"
	| "edit-project-markdown"
	| null;
export const edit_project_jotai = atom<EditProjectStates>(null);

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
	| null;
export const api_task_jotai = atom<APITask>(null);
