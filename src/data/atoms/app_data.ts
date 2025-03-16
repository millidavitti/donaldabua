import { getProjectsController } from "@/backend/controllers/project/get-projects.controller";
import { getUserController } from "@/backend/controllers/user/get-user.controller";
import { getUserLocationController } from "@/backend/controllers/user-location/get-user-location.controller";
import { atom, getDefaultStore } from "jotai";
import { getProfileTechnologiesController } from "@/backend/controllers/profile/get-profile-technologies.controller";
import { toast } from "sonner";
import { getTechnologiesController } from "@/backend/controllers/technologies/get-technologies.controller";
import { AVAILABILITY_OPTIONS, SOCIAL_PLATFORMS } from "../constants";
import { getProfilesController } from "@/backend/controllers/profile/get-profiles.controller";
import { getUserSocialsController } from "@/backend/controllers/socials/get-user-socials.controller";
import { getErrorMessage } from "@/utils/get-error-message";

export const defaultStore = getDefaultStore();

export type Technology = {
	id: string;
	name: string;
};
export const technologies_snapshot_jotai = atom<Technology[]>([]);
export const technologies_jotai = atom<Technology[]>([]);
export const technologies_hay_stack_jotai = atom<Technology[]>([]);
defaultStore.sub(technologies_snapshot_jotai, async () => {
	// Set Technologies
	defaultStore.set(
		technologies_jotai,
		defaultStore.get(technologies_snapshot_jotai),
	);

	if (defaultStore.get(profile_snapshot_jotai).id) {
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
			toast.error(getErrorMessage(error));
			console.error("---App Data:profile_technologies_jotai---\n", error);
		}
	}
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
			toast.error(getErrorMessage(error));
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
defaultStore.sub(user_snapshot_jotai, async () => {
	defaultStore.set(user_name_jotai, defaultStore.get(user_snapshot_jotai).name);
	defaultStore.set(
		user_image_jotai,
		defaultStore.get(user_snapshot_jotai).image,
	);
	defaultStore.set(
		user_video_jotai,
		defaultStore.get(user_snapshot_jotai).video,
	);

	// Get User Location
	try {
		const { location, error } = await getUserLocationController(
			defaultStore.get(user_snapshot_jotai).id,
		);
		if (error) throw new Error(error);
		else if (location) defaultStore.set(user_location_snapshot_jotai, location);
	} catch (error) {
		console.error("---App Data:user_snapshot_jotai---\n", error);
		toast.error(getErrorMessage(error));
	}

	// Get User Profiles
	try {
		const { profiles, error } = await getProfilesController(
			defaultStore.get(user_snapshot_jotai).id,
		);

		if (error) throw new Error(error);
		else if (profiles) {
			defaultStore.set(profiles_snapshot_jotai, profiles);
			defaultStore.set(profile_snapshot_jotai, profiles[0]);
		}
	} catch (error) {
		console.error("---App Data:user_snapshot_jotai---\n", error);
		toast.error(getErrorMessage(error));
	}

	// Get User Socials
	try {
		const { socials, error } = await getUserSocialsController(
			defaultStore.get(user_snapshot_jotai).id,
		);

		if (error) throw new Error(error);
		else if (socials) defaultStore.set(user_socials_snapshot_jotai, socials);
	} catch (error) {
		console.error("---App Data:user_snapshot_jotai---\n", error);
		toast.error(getErrorMessage(error));
	}
});
export const user_name_jotai = atom<string>("");

export const user_image_jotai = atom<string>("");

export const user_video_jotai = atom<string | null>("");

export type UserLocation = {
	city: string;
	country: string;
};

export const user_location_snapshot_jotai = atom<UserLocation>({
	city: "City",
	country: "Country",
});
defaultStore.sub(user_location_snapshot_jotai, () => {
	defaultStore.set(
		user_location_city_jotai,
		defaultStore.get(user_location_snapshot_jotai).city,
	);
	defaultStore.set(
		user_location_country_jotai,
		defaultStore.get(user_location_snapshot_jotai).country,
	);
});
export const user_location_city_jotai = atom<string>("City");
export const user_location_country_jotai = atom<string>("Country");

export type SocialAccount = {
	id: string;
	platform: SocialPlatforms;
	profile: string;
};

export type SocialPlatforms = (typeof SOCIAL_PLATFORMS)[number];

export const social_account_snapshot_jotai = atom<SocialAccount>({
	id: "",
	platform: "Facebook",
	profile: "",
});
export const social_account_jotai = atom<SocialAccount>({
	id: "",
	platform: "Facebook",
	profile: "",
});
defaultStore.sub(social_account_snapshot_jotai, () => {
	defaultStore.set(
		social_account_jotai,
		defaultStore.get(social_account_snapshot_jotai),
	);
});

export const user_socials_snapshot_jotai = atom<SocialAccount[]>([]);
export const user_socials_jotai = atom<SocialAccount[]>([]);
defaultStore.sub(user_socials_snapshot_jotai, () => {
	defaultStore.set(
		user_socials_jotai,
		defaultStore.get(user_socials_snapshot_jotai),
	);
});

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
defaultStore.sub(profile_snapshot_jotai, async () => {
	defaultStore.set(
		profile_availability_jotai,
		defaultStore.get(profile_snapshot_jotai).availability,
	);
	defaultStore.set(
		profile_title_jotai,
		defaultStore.get(profile_snapshot_jotai).title,
	);
	defaultStore.set(
		profile_hourly_rate_jotai,
		defaultStore.get(profile_snapshot_jotai).hourlyRate,
	);
	defaultStore.set(
		profile_overview_jotai,
		defaultStore.get(profile_snapshot_jotai).overview || "",
	);
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
		toast.error(getErrorMessage(error));
		console.error("---App Data:profile_snapshot_jotai---\n", error);
	}

	try {
		const { projects, error } = await getProjectsController(
			defaultStore.get(profile_snapshot_jotai).id,
		);
		if (error) throw new Error(error);
		else if (projects) defaultStore.set(projects_snapshot_jotai, projects);
	} catch (error) {
		console.error("---App Data:profile_snapshot_jotai---\n", error);
		toast.error(getErrorMessage(error));
	}

	// Sync Profiles
	try {
		const { profiles, error } = await getProfilesController(
			defaultStore.get(user_snapshot_jotai).id,
		);

		if (error) throw new Error(error);
		else if (profiles) defaultStore.set(profiles_snapshot_jotai, profiles);
	} catch (error) {
		console.error("---App Data:profile_snapshot_jotai---\n", error);
		toast.error(getErrorMessage(error));
	}
});

export const profiles_snapshot_jotai = atom<UserProfile[]>([]);
export const profiles_jotai = atom<UserProfile[]>([]);
defaultStore.sub(profiles_snapshot_jotai, async () => {
	defaultStore.set(profiles_jotai, defaultStore.get(profiles_snapshot_jotai));
});

export const profile_availability_jotai =
	atom<ProfileAvailabilityOptions>("None");
export const profile_title_jotai = atom<string>("");
export const profile_hourly_rate_jotai = atom<number>(1);
export const profile_overview_jotai = atom<string>("");
export const profile_technologies_jotai = atom<Technology[]>([]);
export const profile_hay_stack_jotai = atom<Technology[]>([]);
export const profile_technologies_snapshot_jotai = atom<Technology[]>([]);
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
export const project_snapshot_jotai = atom<Project | null>(null);
export const project_title_jotai = atom<string>("");
export const project_description_jotai = atom<string>("");
export const project_thumbnail_jotai = atom<string>("");
export const project_content_jotai = atom<ProjectContent>([]);
export const project_hay_stack_jotai = atom<Technology[]>([]);
export const project_technologies_jotai = atom<Technology[]>([]);
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
