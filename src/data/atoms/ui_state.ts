import { atom } from "jotai";
import { EDIT_PROFILE_STATES, EDIT_PROJECT_STATES } from "../constants";

export type EditProfileStates = (typeof EDIT_PROFILE_STATES)[number];
export const edit_profile_jotai = atom<EditProfileStates>(null);

export type EditProjectStates = (typeof EDIT_PROJECT_STATES)[number];
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
