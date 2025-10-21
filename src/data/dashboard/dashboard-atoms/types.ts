import { AVAILABILITY_OPTIONS, SOCIAL_PLATFORMS } from "../dashboard-constants";

export type Technology = {
	id: string;
	name: string;
};

export type User = {
	id: string;
	name: string;
	image: string;
	video: string | null;
};

export type Location = {
	city: string;
	country: string;
};

export type Social = {
	id?: string;
	platform: SocialPlatforms;
	profile: string;
};

export type SocialPlatforms = (typeof SOCIAL_PLATFORMS)[number];

export type Availability = (typeof AVAILABILITY_OPTIONS)[number];

export type Profile = {
	id: string;
	availability: Availability;
	title: string;
	hourlyRate: number;
	overview: string;
};

export type ProjectContent = {
	id: string;
	type: "image" | "video" | "markdown";
	position: number;
	url?: string | null;
	caption?: string | null;
	markdown?: string | null;
};

export type Project = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	repository: string;
	deployment: string;
};

export type APIResponse<T, K extends string> = {
	success?: boolean;
	error?: string;
} & { [key in K]: T };

export type ProjectData = {
	project: Project;
	technologies: Technology[];
	content: ProjectContent[];
};
