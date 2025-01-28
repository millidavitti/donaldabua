import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export type Profile = {
	name: string;
	image: string;
	video: string | undefined;
	location: {
		city: string;
		country: string;
	};
	hoursPerWeek: string;
};
export const profile_jotai = atom<Profile>({
	name: "Donald Abua",
	image: "/stud.jpg",
	video: undefined,
	location: {
		city: "New York",
		country: "United State",
	},
	hoursPerWeek: "More than 30 hrs/week",
});

export const profile_name_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("name"),
);
export const profile_image_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("image"),
);
export const profile_video_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("video"),
);
export const profile_location_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("location"),
);
export const profile_hours_per_week_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("hoursPerWeek"),
);
