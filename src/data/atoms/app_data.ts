import { getProfile } from "@/backend/get-profile-controller";
import { getUser } from "@/backend/get-user-controller";
import { atom, getDefaultStore } from "jotai";
import { focusAtom } from "jotai-optics";

export const defaultStore = getDefaultStore();

export type ProfileUser = {
	id: string;
	name: string;
	image: string;
	video: string;
	location: ProfileUserLocation;
};
export type ProfileUserLocation = {
	city: string;
	country: string;
};
export type ProfileAvailabilityOptions =
	| "More than 30 hrs/week"
	| "Less than 30 hrs/week"
	| "As needed - open to offers"
	| "None";
export type Profile = {
	user?: ProfileUser;
	availability: ProfileAvailabilityOptions;
	title: string;
	hourlyRate: number;
	overview: string;
};
export const user_jotai = atom<ProfileUser>({
	id: "",
	name: "",
	image: "",
	video: "",
	location: {
		city: "",
		country: "",
	},
});
user_jotai.onMount = (setAtom) => {
	getUser().then((user) => setAtom(user));
};
export const profile_jotai = atom<Profile>({
	title: "Full Stack Node JS Developer",
	hourlyRate: 15,
	overview: "",
	availability: "More than 30 hrs/week",
});
profile_jotai.onMount = (setAtom) => {
	getProfile().then((profile) => setAtom(profile));
};

export const profile_user_name_jotai = atom<string>("");
defaultStore.sub(user_jotai, () => {
	defaultStore.set(profile_user_name_jotai, defaultStore.get(user_jotai).name!);
});

export const profile_user_image_jotai = atom<string>("");
defaultStore.sub(user_jotai, () => {
	defaultStore.set(
		profile_user_image_jotai,
		defaultStore.get(user_jotai).image,
	);
});

export const profile_user_video_jotai = atom<string>("");
defaultStore.sub(user_jotai, () => {
	defaultStore.set(
		profile_user_video_jotai,
		defaultStore.get(user_jotai).video,
	);
});

export const profile_user_location_jotai = atom<ProfileUserLocation>({
	city: "",
	country: "",
});
defaultStore.sub(user_jotai, () => {
	defaultStore.set(
		profile_user_location_jotai,
		defaultStore.get(user_jotai).location,
	);
});

export const availability_jotai = atom<string>("");
defaultStore.sub(profile_jotai, () => {
	defaultStore.set(
		availability_jotai,
		defaultStore.get(profile_jotai).availability,
	);
});

export const profile_title_jotai = atom<string>("");
defaultStore.sub(profile_jotai, () => {
	defaultStore.set(profile_title_jotai, defaultStore.get(profile_jotai).title);
});

export const profile_hourly_rate_jotai = atom<number>(1);
defaultStore.sub(profile_jotai, () => {
	defaultStore.set(
		profile_hourly_rate_jotai,
		defaultStore.get(profile_jotai).hourlyRate,
	);
});

export const profile_overview_jotai = atom<string>("");
defaultStore.sub(profile_jotai, () => {
	defaultStore.set(
		profile_overview_jotai,
		defaultStore.get(profile_jotai).overview,
	);
});

export type PortfolioProjectImage = {
	id: string;
	type: "image";
	url: string;
	caption?: string;
	position: number;
};
export type PortfolioProjectVideo = {
	id: string;
	type: "video";
	url: string;
	caption?: string;
	position: number;
};
export type PortfolioProjectText = {
	id: string;
	type: "text";
	markdown: string;
	position: number;
};
export type PortfolioProjectData = {
	id: string;
	title: string;
	description: string;
	techStack: string[];
	thumbnail: string;
	content: (
		| PortfolioProjectImage
		| PortfolioProjectVideo
		| PortfolioProjectText
	)[];
};

// This is use to store fetched project data
export const portfolio_project_data_jotai = atom<PortfolioProjectData>({
	id: "",
	title: "",
	description: "",
	techStack: [],
	content: [],
	thumbnail: "",
});

export const portfolio_project_title_jotai = atom<string>("");

export const portfolio_project_description_jotai = atom<string>("");

export const portfolio_project_content_jotai = atom<
	(PortfolioProjectImage | PortfolioProjectVideo | PortfolioProjectText)[]
>([]);

export const portfolio_project_tech_stack_jotai = atom<string[]>([]);

export const portfolio_project_thumbnail_jotai = atom<string>("");

export type PortfolioProject = {
	id: string;
	title: string;
	thumbnail: string;
};
export const portfolio_projects_jotai = atom<PortfolioProject[]>([]);

export const selected_portfolio_project_jotai =
	atom<PortfolioProjectData | null>(null);
