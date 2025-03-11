import { getProjectsController } from "@/backend/get-projects.controller";
import { getUserProfileController } from "@/backend/get-user-profile.controller";
import { getUserController } from "@/backend/get-user.controller";
import { getUserLocationController } from "@/backend/get-user-location.controller";
import { atom, getDefaultStore } from "jotai";
import { getProfileTechnologiesController } from "@/backend/get-profile-technologies.controller";
import { toast } from "sonner";
import { getTechnologiesController } from "@/backend/get-technologies.controller";
import { AVAILABILITY_OPTIONS } from "../constants";

export const defaultStore = getDefaultStore();

export type Technology = {
	id: string;
	name: string;
};
export const technologies_snapshot_jotai = atom<Technology[]>([]);
export const technologies_jotai = atom<Technology[]>([]);
export const technologies_hay_stack_jotai = atom<Technology[]>([]);
defaultStore.sub(technologies_snapshot_jotai, () => {
	// Set Technologies
	defaultStore.set(
		technologies_jotai,
		defaultStore.get(technologies_snapshot_jotai),
	);
});

export type User = {
	id: string;
	name: string;
	image: string;
	video: string | null;
};
export const user_snapshot_jotai = atom<User>({
	id: "",
	name: "",
	image: "",
	video: "",
});
// Get User On Mount
user_snapshot_jotai.onMount = (setAtom) => {
	(async () => {
		try {
			const { user, error } = await getUserController();
			if (error) {
				setAtom({
					id: "",
					image: "/stud.jpg",
					name: "Failed to fetch user",
					video: null,
				});
				throw new Error(error);
			} else if (user) setAtom(user);
		} catch (error) {
			console.error("---App Data:user_jotai---\n", error);
			toast.error(
				"We were unable to retrieve your data. Please try again later.",
			);
		}

		try {
			const { technologies, error } = await getTechnologiesController();
			if (error) throw new Error(error);
			else if (technologies)
				defaultStore.set(technologies_snapshot_jotai, technologies);
		} catch (error) {
			console.error("---App Data:technologies_jotai---\n", error);
			toast.error("Unable to retrieve technologies. Please try again.");
		}
	})();
};

export const user_name_jotai = atom<string>("");
defaultStore.sub(user_snapshot_jotai, () => {
	defaultStore.set(
		user_name_jotai,
		defaultStore.get(user_snapshot_jotai).name!,
	);
});

export const user_image_jotai = atom<string>("");
defaultStore.sub(user_snapshot_jotai, () => {
	defaultStore.set(
		user_image_jotai,
		defaultStore.get(user_snapshot_jotai).image,
	);
});

export const user_video_jotai = atom<string | null>("");
defaultStore.sub(user_snapshot_jotai, () => {
	defaultStore.set(
		user_video_jotai,
		defaultStore.get(user_snapshot_jotai).video,
	);
});

export type UserLocation = {
	city: string;
	country: string;
};

export const user_location_snapshot_jotai = atom<UserLocation>({
	city: "City",
	country: "Country",
});
defaultStore.sub(user_snapshot_jotai, async () => {
	try {
		const { location, error } = await getUserLocationController(
			defaultStore.get(user_snapshot_jotai).id,
		);
		if (error) throw new Error(error);
		else if (location) defaultStore.set(user_location_snapshot_jotai, location);
	} catch (error) {
		console.error("---App Data:user_location_snapshot__jotai---\n", error);
		toast.error(
			"We were unable to retrieve your data. Please try again later.",
		);
	}
});

export const user_location_city_jotai = atom<string>("City");
defaultStore.sub(user_location_snapshot_jotai, () => {
	defaultStore.set(
		user_location_city_jotai,
		defaultStore.get(user_location_snapshot_jotai).city,
	);
});

export const user_location_country_jotai = atom<string>("Country");
defaultStore.sub(user_location_snapshot_jotai, () => {
	defaultStore.set(
		user_location_country_jotai,
		defaultStore.get(user_location_snapshot_jotai).country,
	);
});

export type UserSocials = {
	id: string;
	platform: string;
	profile: string;
};
export const user_socials_jotai = atom<UserSocials[]>([]);

export type ProfileAvailabilityOptions = (typeof AVAILABILITY_OPTIONS)[number];

export type UserProfile = {
	id: string;
	availability: ProfileAvailabilityOptions;
	title: string;
	hourlyRate: number;
	overview: string;
};

export const profile_snapshot_jotai = atom<UserProfile>({
	id: "",
	title: "",
	hourlyRate: 1,
	overview: "",
	availability: "None",
});

defaultStore.sub(user_snapshot_jotai, async () => {
	try {
		const { profile, error } = await getUserProfileController(
			defaultStore.get(user_snapshot_jotai).id,
		);
		if (error) throw new Error(error);
		else if (profile) defaultStore.set(profile_snapshot_jotai, profile);
	} catch (error) {
		console.error("---App Data:profile_snapshot_jotai---\n", error);
		toast.error(
			"We were unable to retrieve your data. Please try again later.",
		);
	}
});

export const profile_availability_jotai =
	atom<ProfileAvailabilityOptions>("None");
defaultStore.sub(profile_snapshot_jotai, () => {
	defaultStore.set(
		profile_availability_jotai,
		defaultStore.get(profile_snapshot_jotai).availability,
	);
});

export const profile_title_jotai = atom<string>("");
defaultStore.sub(profile_snapshot_jotai, () => {
	defaultStore.set(
		profile_title_jotai,
		defaultStore.get(profile_snapshot_jotai).title,
	);
});

export const profile_hourly_rate_jotai = atom<number>(1);
defaultStore.sub(profile_snapshot_jotai, () => {
	defaultStore.set(
		profile_hourly_rate_jotai,
		defaultStore.get(profile_snapshot_jotai).hourlyRate,
	);
});

export const profile_overview_jotai = atom<string>("");
defaultStore.sub(profile_snapshot_jotai, () => {
	defaultStore.set(
		profile_overview_jotai,
		defaultStore.get(profile_snapshot_jotai).overview || "",
	);
});

export const profile_technologies_snapshot_jotai = atom<Technology[]>([]);
export const profile_technologies_jotai = atom<Technology[]>([]);
export const profile_hay_stack_jotai = atom<Technology[]>([]);
defaultStore.sub(profile_snapshot_jotai, async () => {
	try {
		const { profileTechnologies, error } =
			await getProfileTechnologiesController(
				defaultStore.get(profile_snapshot_jotai).id,
			);

		if (error) throw new Error(error);
		else if (profileTechnologies)
			defaultStore.set(
				profile_technologies_snapshot_jotai,
				profileTechnologies,
			);
	} catch (error) {
		toast.error(
			"We were unable to retrieve your data. Please try again later.",
		);
		console.error("---App Data:profile_technologies_jotai---\n", error);
	}
});
defaultStore.sub(profile_technologies_snapshot_jotai, () => {
	// Set Profile Technologies
	defaultStore.set(
		profile_technologies_jotai,
		defaultStore.get(profile_technologies_snapshot_jotai),
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
export const projects_snapshot_jotai = atom<Project[]>([]);

defaultStore.sub(profile_snapshot_jotai, async () => {
	try {
		const { projects, error } = await getProjectsController(
			defaultStore.get(profile_snapshot_jotai).id,
		);
		if (error) throw new Error(error);
		else if (projects) defaultStore.set(projects_snapshot_jotai, projects);
	} catch (error) {
		console.error("---App Data:projects_jotai---\n", error);
		toast.error(
			"We were unable to retrieve your data. Please try again later.",
		);
	}
});
export const project_snapshot_jotai = atom<Project | null>(null);
export const project_title_jotai = atom<string>("");
export const project_description_jotai = atom<string>("");
export const project_thumbnail_jotai = atom<string>("");
export const project_content_jotai = atom<ProjectContent>([]);
export const project_technologies_jotai = atom<Technology[]>([]);
export const project_hay_stack_jotai = atom<Technology[]>([]);
defaultStore.sub(project_technologies_jotai, () => {
	defaultStore.set(
		project_hay_stack_jotai,
		defaultStore
			.get(profile_technologies_snapshot_jotai)
			.filter(
				(technology) =>
					!defaultStore
						.get(project_technologies_jotai)
						.some((tech) => tech.id === technology.id),
			),
	);
});

export type APIResponse<T, K extends string> = {
	success?: boolean;
	error?: string;
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
