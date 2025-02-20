import { getPortfolioProjects } from "@/backend/get-portfolio-projects";
import { getProfile } from "@/backend/get-profile-controller";
import { getUser } from "@/backend/get-user.controller";
import { getUserLocation } from "@/backend/get-user-location.controller";
import { atom, getDefaultStore } from "jotai";

export const defaultStore = getDefaultStore();

export type User = {
	id: string;
	name: string;
	image: string;
	video: string;
};
export const user_jotai = atom<User>({
	id: "",
	name: "",
	image: "",
	video: "",
});
// Get User On Mount
user_jotai.onMount = (setAtom) => {
	getUser().then((user) => {
		console.log("---user---\n", user);
		setAtom(user);
	});
};

export type UserLocation = {
	city: string;
	country: string;
};

export const user_location_jotai = atom<UserLocation>({
	city: "",
	country: "",
});

defaultStore.sub(user_jotai, () => {
	getUserLocation(defaultStore.get(user_jotai).id).then((userLocation) => {
		console.log("---userLocation---\n", userLocation);

		defaultStore.set(user_location_jotai, userLocation);
	});
});

export type ProfileAvailabilityOptions =
	| "More than 30 hrs/week"
	| "Less than 30 hrs/week"
	| "As needed - open to offers"
	| "None";

export type Profile = {
	availability: ProfileAvailabilityOptions;
	title: string;
	hourlyRate: number;
	overview: string;
};
export const profile_jotai = atom<Profile>({
	title: "",
	hourlyRate: 0,
	overview: "",
	availability: "None",
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
		defaultStore.get(user_jotai).video || "",
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
export const portfolio_projects_jotai = atom<PortfolioProjectData[]>([]);
portfolio_projects_jotai.onMount = (setAtom) => {
	getPortfolioProjects().then((projects) => setAtom(projects));
};

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
// export const portfolio_projects_jotai = atom<PortfolioProject[]>([]);

export const selected_portfolio_project_jotai =
	atom<PortfolioProjectData | null>(null);

export type ProfileSocials = {
	id: string;
	platform: string;
	profile: string;
};
export const profile_socials_jotai = atom<ProfileSocials[]>([]);

export type ProfileTechnology = {
	id: string;
	name: string;
};
