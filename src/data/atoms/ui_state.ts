import { atom } from "jotai";

export const edit_profile_jotai = atom<
	"edit-image" | "edit-location" | "edit-name" | "edit-video" | null
>(null);
