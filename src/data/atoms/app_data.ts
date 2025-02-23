import { getProjects } from "@/backend/get-projects.controller";
import { getUserProfile } from "@/backend/get-user-profile.controller";
import { getUser } from "@/backend/get-user.controller";
import { getUserLocation } from "@/backend/get-user-location.controller";
import { atom, getDefaultStore } from "jotai";
import { getProfileTechnologies } from "@/backend/get-profile-technologies.controller";

export const defaultStore = getDefaultStore();

export type User = {
	id: string;
	name: string;
	image: string;
	video: string | null;
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

export const user_name_jotai = atom<string>("");
defaultStore.sub(user_jotai, () => {
	defaultStore.set(user_name_jotai, defaultStore.get(user_jotai).name!);
});

export const user_image_jotai = atom<string>("");
defaultStore.sub(user_jotai, () => {
	defaultStore.set(user_image_jotai, defaultStore.get(user_jotai).image);
});

export const user_video_jotai = atom<string | null>("");
defaultStore.sub(user_jotai, () => {
	defaultStore.set(user_video_jotai, defaultStore.get(user_jotai).video);
});

export type UserLocation = {
	city: string;
	country: string;
};

export const user_location_jotai = atom<UserLocation>({
	city: "City",
	country: "Country",
});
defaultStore.sub(user_jotai, () => {
	console.log("---user---\n", defaultStore.get(user_jotai));
	getUserLocation(defaultStore.get(user_jotai).id).then((userLocation) => {
		defaultStore.set(user_location_jotai, userLocation);
	});
});

export const user_location_city_jotai = atom<string>("City");
defaultStore.sub(user_location_jotai, () => {
	defaultStore.set(
		user_location_city_jotai,
		defaultStore.get(user_location_jotai).city,
	);
});

export const user_location_country_jotai = atom<string>("Country");
defaultStore.sub(user_location_jotai, () => {
	defaultStore.set(
		user_location_country_jotai,
		defaultStore.get(user_location_jotai).country,
	);
});

export type ProfileAvailabilityOptions =
	| "More than 30 hrs/week"
	| "Less than 30 hrs/week"
	| "As needed - open to offers"
	| "None";

export type UserProfile = {
	id: string;
	availability: ProfileAvailabilityOptions;
	title: string;
	hourlyRate: number;
	overview: string;
};

export const profile_jotai = atom<UserProfile>({
	id: "",
	title: "",
	hourlyRate: 0,
	overview: "",
	availability: "None",
});
defaultStore.sub(user_jotai, () => {
	getUserProfile(defaultStore.get(user_jotai).id).then((profile) => {
		defaultStore.set(profile_jotai, profile);
	});
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

export type ProjectImage = {
	id: string;
	type: "image";
	url: string;
	caption?: string;
	position: number;
};
export type ProjectVideo = {
	id: string;
	type: "video";
	url: string;
	caption?: string;
	position: number;
};
export type ProjectText = {
	id: string;
	type: "text";
	markdown: string;
	position: number;
};
export type Project = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
};

// This is use to store fetched project data
export const projects_jotai = atom<Project[]>([]);

defaultStore.sub(profile_jotai, () => {
	getProjects(defaultStore.get(profile_jotai).id).then((projects) => {
		defaultStore.set(projects_jotai, projects);
	});
});

export const project_title_jotai = atom<string>("");
export const project_description_jotai = atom<string>("");
export const project_thumbnail_jotai = atom<string>("");

export type ProjectContent = (ProjectImage | ProjectVideo | ProjectText)[];

export const project_content_jotai = atom<ProjectContent>([]);

export type Technology = {
	id: string;
	name: string;
};

export const profile_technologies_jotai = atom<Technology[]>([]);
defaultStore.sub(profile_jotai, () => {
	getProfileTechnologies(defaultStore.get(profile_jotai).id).then((tech) =>
		defaultStore.set(profile_technologies_jotai, tech),
	);
});

export const project_technologies_jotai = atom<Technology[]>([]);

export const selected_project_jotai = atom<Project | null>(null);

export type ProfileSocials = {
	id: string;
	platform: string;
	profile: string;
};
export const profile_socials_jotai = atom<ProfileSocials[]>([]);
