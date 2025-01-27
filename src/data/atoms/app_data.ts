import { atom } from "jotai";

export type Profile = {
	name: string;
	location: {
		city: string;
		country: string;
	};
};
export const profile_jotai = atom<Profile>({
	name: "Donald Abua",
	location: {
		city: "New York",
		country: "United State",
	},
});
