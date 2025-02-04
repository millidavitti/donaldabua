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
	title: string;
	hourlyRate: number;
	profileOverview: string;
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
	title: "Full Stack Node JS Developer",
	hourlyRate: 15,
	profileOverview: "",
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
export const profile_title_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("title"),
);
export const profile_hourly_rate_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("hourlyRate"),
);
export const profile_overview_jotai = focusAtom(profile_jotai, (optic) =>
	optic.prop("profileOverview"),
);

type PortfolioProjectImage = {
	id: string;
	type: "image";
	url: string;
	caption?: string;
	position: number;
};
type PortfolioProjectVideo = {
	id: string;
	type: "video";
	url: string;
	caption?: string;
	position: number;
};
type PortfolioProjectText = {
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
	content: (
		| PortfolioProjectImage
		| PortfolioProjectVideo
		| PortfolioProjectText
	)[];
};

export const portfolio_project_data_jotai = atom<PortfolioProjectData>({
	id: "",
	title: "",
	description: "",
	techStack: [],
	content: [],
});
