import { getUser } from "@/backend/get-user-action";
import { createId } from "@paralleldrive/cuid2";
import { atom, getDefaultStore } from "jotai";
import { focusAtom } from "jotai-optics";

export const defaultStore = getDefaultStore();

export type ProfileUser = {
	id: string;
	name: string;
	image: string;
	video: string | undefined;
	location: {
		city: string;
		country: string;
	};
};
export type Profile = {
	user: ProfileUser | null;
	hoursPerWeek: string;
	title: string;
	hourlyRate: number;
	profileOverview: string;
};
export const user_jotai = atom<ProfileUser | null>(null);

export const profile_jotai = atom<Profile>({
	user: null,
	hoursPerWeek: "More than 30 hrs/week",
	title: "Full Stack Node JS Developer",
	hourlyRate: 15,
	profileOverview: "",
});
profile_jotai.onMount = (setAtom) => {
	getUser().then((user) =>
		setAtom((profile) => {
			return { ...profile, user };
		}),
	);
};
export const profile_user_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("user"),
);
export const profile_user_name_jotai = atom("");
export const profile_user_image_jotai = atom("");
export const profile_user_video_jotai = atom("");
export const profile_user_location_jotai = atom("");

export const profile_hours_per_week_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("hoursPerWeek"),
);
export const profile_title_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("title"),
);
export const profile_hourly_rate_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("hourlyRate"),
);
export const profile_overview_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("profileOverview"),
);

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
