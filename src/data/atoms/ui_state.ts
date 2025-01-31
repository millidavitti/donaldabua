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
