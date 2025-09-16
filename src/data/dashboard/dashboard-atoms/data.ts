import { updateUserController } from "@/backend/controllers/dashboard/user/update-user.controller";
import { getErrorMessage } from "@/utils/get-error-message";
import { atom } from "jotai";
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { toast } from "sonner";
import {
	input_social_atom,
	Profile,
	Social,
	Technology,
	User,
	UserLocation,
} from "./dashboard-data";
import { queryClient } from "@/components/query-client";
import { updateUserLocationController } from "@/backend/controllers/dashboard/user-location/update-user-location.controller";
import { updateTechnologiesController } from "@/backend/controllers/dashboard/technologies/update-technologies.controller";
import { jotaiStore } from "@/components/jotai-store";
import { dashboard_view_jotai, settings_view_atom } from "./dashboard-ui-state";
import { createSocial } from "@/backend/controllers/dashboard/socials/create-user-socials.controller";
import { updateSocial } from "@/backend/controllers/dashboard/socials/update-user-socials.controller";
import { deleteSocial } from "@/backend/controllers/dashboard/socials/delete-user-socials.controller";
import { createProfile } from "@/backend/controllers/dashboard/profile/create-profile.controller";
import { atomWithReset } from "jotai/utils";
import { updateProfile } from "@/backend/controllers/dashboard/profile/update-profile.controller";
import { deleteProfile } from "@/backend/controllers/dashboard/profile/delete-profile.controller";

const api = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT!;
export const payload_view_atom = atomWithQuery(() => ({
	queryKey: ["payload_view"],
	queryFn: async () => {
		const res = await fetch(api + "/dashboard", {
			credentials: "include",
		});
		const json = await res.json();
		return json.data;
	},
}));

export const mutate_user_atom = atomWithMutation(() => ({
	mutationKey: ["mutate_user"],
	mutationFn: async (user: Partial<User>) => {
		const json = await updateUserController(user);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
	},
}));

export const mutate_location_atom = atomWithMutation(() => ({
	mutationKey: ["mutate_location"],
	mutationFn: async (location: Partial<UserLocation>) => {
		const json = await updateUserLocationController(location);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
	},
}));

export const technologies_jotai = atom([]);

export const mutate_technologies_atom = atomWithMutation(() => ({
	mutationKey: ["mutate_technologies"],
	mutationFn: async (technologies: Technology[]) => {
		await updateTechnologiesController(technologies);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
		jotaiStore.set(settings_view_atom, null);
	},
}));

export const create_social_atom = atomWithMutation(() => ({
	mutationKey: ["create_social"],
	mutationFn: async (socials: Social) => {
		const json = await createSocial(socials);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
		jotaiStore.set(input_social_atom, { platform: "Facebook", profile: "" });
	},
}));

export const mutate_social_atom = atomWithMutation(() => ({
	mutationKey: ["mutate_social"],
	mutationFn: async (social: Social) => {
		const json = await updateSocial(social);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
		jotaiStore.set(dashboard_view_jotai, null);
		jotaiStore.set(input_social_atom, { platform: "Facebook", profile: "" });
	},
}));

export const delete_social_atom = atomWithMutation(() => ({
	mutationKey: ["delete_social"],
	mutationFn: async (socialId: string) => {
		const json = await deleteSocial(socialId);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
		jotaiStore.set(input_social_atom, { platform: "Facebook", profile: "" });
	},
}));

export const input_profile_atom = atomWithReset<Partial<Profile>>({
	title: "",
});

export const create_profile_atom = atomWithMutation(() => ({
	mutationKey: ["create_social"],
	mutationFn: async (profile: Partial<Profile>) => {
		const json = await createProfile(profile);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
		jotaiStore.set(input_social_atom, { platform: "Facebook", profile: "" });
	},
}));

export const profile_atom = atom<Profile, Profile[], void>(
	(get) => get(payload_view_atom).data?.profiles[0] as Profile,
	async (_, __, update) => {
		await queryClient.cancelQueries({ queryKey: ["payload_view"] });
		queryClient.setQueryData(
			["payload_view"],
			(payload_view: Record<string, unknown>) => {
				return {
					...payload_view,
					profiles: [
						update,
						...(payload_view.profiles as Profile[]).filter((profile) => {
							return profile.id !== update.id;
						}),
					],
				};
			},
		);
	},
);

export const mutate_profile_atom = atomWithMutation(() => ({
	mutationKey: ["mutate_profile"],
	mutationFn: async (profile: Partial<Profile>) => {
		const json = await updateProfile(profile);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
	},
}));

export const delete_profile_atom = atomWithMutation(() => ({
	mutationKey: ["delete_profile"],
	mutationFn: async (profile: Partial<Profile>) => {
		const json = await deleteProfile(profile);
		toast.info(json.message);
	},
	onError: (error) => {
		const message = getErrorMessage(error);
		toast.error(message);
		console.error(error);
	},
	onSettled: async () => {
		await queryClient.invalidateQueries({ queryKey: ["payload_view"] });
	},
}));
