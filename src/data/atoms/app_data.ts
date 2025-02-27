import { getProjectsController } from "@/backend/get-projects.controller";
import { getUserProfileController } from "@/backend/get-user-profile.controller";
import { getUserController } from "@/backend/get-user.controller";
import { getUserLocationController } from "@/backend/get-user-location.controller";
import { atom, getDefaultStore } from "jotai";
import { getProfileTechnologiesController } from "@/backend/get-profile-technologies.controller";
import { toast } from "sonner";
import { getTechnologiesController } from "@/backend/get-technologies.controller";

export const defaultStore = getDefaultStore();

export const technologies_jotai = atom<Technology[]>([]);

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
	getUserController()
		.then((data) => {
			const { user, error } = data;
			if (error) {
				setAtom({
					id: "",
					image: "/stud.jpg",
					name: "Failed to fetch user",
					video: null,
				});
				throw error;
			} else setAtom(user);
		})
		.catch((error) => {
			console.log("---App Data:user_jotai---\n", error);
			toast.info(
				"We were unable to retrieve your data. Please try again later.",
			);
		});
	getTechnologiesController()
		.then((data) => {
			const { technologies, error } = data;
			if (error) throw error;
			else defaultStore.set(technologies_jotai, technologies);
		})
		.catch((error) => {
			console.log("---App Data:technologies_jotai---\n", error);
			toast.info("Unable to retrieve technologies. Please try again.");
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
	getUserLocationController(defaultStore.get(user_jotai).id)
		.then((data) => {
			const { location, error } = data;
			if (error) throw error;
			else defaultStore.set(user_location_jotai, location);
		})
		.catch((error) => {
			console.log("---App Data:user_location_jotai---\n", error);
			toast.info(
				"We were unable to retrieve your data. Please try again later.",
			);
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
	getUserProfileController(defaultStore.get(user_jotai).id)
		.then((data) => {
			const { profile, error } = data;
			if (error) throw error;
			else defaultStore.set(profile_jotai, profile);
		})
		.catch((error) => {
			console.log("---App Data:profile_jotai---\n", error);
			toast.info(
				"We were unable to retrieve your data. Please try again later.",
			);
		});
});

export const availability_jotai = atom<ProfileAvailabilityOptions>("None");
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
export type ProjectMarkdown = {
	id: string;
	type: "markdown";
	markdown: string;
	position: number;
};
export type ProjectContent = (ProjectImage | ProjectVideo | ProjectMarkdown)[];

export type Project = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
};

// This is use to store fetched project data
export const projects_jotai = atom<Project[]>([]);

defaultStore.sub(profile_jotai, () => {
	getProjectsController(defaultStore.get(profile_jotai).id)
		.then((data) => {
			const { projects, error } = data;
			if (error) throw error;
			else defaultStore.set(projects_jotai, projects);
		})
		.catch((error) => {
			console.log("---App Data:projects_jotai---\n", error);
			toast.info(
				"We were unable to retrieve your data. Please try again later.",
			);
		});
});
export const project_to_edit_jotai = atom<Project | null>(null);

export const project_title_jotai = atom<string>("");

export const project_description_jotai = atom<string>("");
export const project_thumbnail_jotai = atom<string>("");

export const project_content_jotai = atom<ProjectContent>([]);

export type Technology = {
	id: string;
	name: string;
};

export const profile_technologies_jotai = atom<Technology[]>([]);
export const profile_hay_stack_jotai = atom<Technology[]>([]);
defaultStore.sub(profile_technologies_jotai, () => {
	defaultStore.set(
		profile_hay_stack_jotai,
		defaultStore
			.get(technologies_jotai)
			.filter(
				(technology) =>
					!defaultStore
						.get(profile_technologies_jotai)
						.some((tech) => tech.id === technology.id),
			),
	);
});
defaultStore.sub(profile_jotai, () => {
	getProfileTechnologiesController(defaultStore.get(profile_jotai).id)
		.then((data) => {
			const { profileTechnologies, error } = data;
			if (error) throw error;
			else defaultStore.set(profile_technologies_jotai, profileTechnologies);
		})
		.catch((error) => {
			toast.info(
				"We were unable to retrieve your data. Please try again later.",
			);
			console.log("---App Data:profile_technologies_jotai---\n", error);
		});
});

export const project_technologies_jotai = atom<Technology[]>([]);
export const project_hay_stack_jotai = atom<Technology[]>([]);
defaultStore.sub(project_technologies_jotai, () => {
	defaultStore.set(
		project_hay_stack_jotai,
		defaultStore
			.get(profile_technologies_jotai)
			.filter(
				(technology) =>
					!defaultStore
						.get(project_technologies_jotai)
						.some((tech) => tech.id === technology.id),
			),
	);
});

export const selected_project_jotai = atom<Project | null>(null);

export type ProfileSocials = {
	id: string;
	platform: string;
	profile: string;
};
export const profile_socials_jotai = atom<ProfileSocials[]>([]);

export type APIResponse<T, K extends string> = {
	success?: boolean;
	error?: unknown;
} & { [key in K]: T };

export type ProjectTechnology = {
	projectId: string;
	technologyId: string;
};

export type ProjectData = {
	project: Project;
	technologies: Technology[];
	content: ProjectContent;
};
