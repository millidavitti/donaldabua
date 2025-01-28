import { atom } from "jotai";

export type EditProfileStates =
	| "edit-image"
	| "edit-location"
	| "edit-name"
	| "edit-video"
	| "edit-hours-per-week"
	| "edit-title"
	| "edit-hourly-rate"
	| null;
export const edit_profile_jotai = atom<EditProfileStates>(null);
