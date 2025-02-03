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
	| "edit-tech-stack"
	| "edit-employment-history"
	| "edit-socials"
	| "edit-portfolio"
	| null;
export const edit_profile_jotai = atom<EditProfileStates>(null);

export type EditPortfolioProjectStates =
	| "edit-portfolio-project-video"
	| "edit-portfolio-project-image"
	| "edit-portfolio-project-text"
	| null;
export const edit_portfolio_project_jotai =
	atom<EditPortfolioProjectStates>(null);

export const content_hover_state_jotai = atom<
	"hover-image-icon" | "hover-video-icon" | "hover-text-icon" | null
>(null);

export const portfolio_project_form_step_jotai = atom<
	"draft-project-info" | "preview-project-draft"
>("draft-project-info");
