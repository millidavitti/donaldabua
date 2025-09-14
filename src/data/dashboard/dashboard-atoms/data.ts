import { updateUserController } from "@/backend/controllers/dashboard/user/update-user.controller";
import { getErrorMessage } from "@/utils/get-error-message";
import { atom } from "jotai";
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { toast } from "sonner";
import {
	input_socials_atom,
	SocialAccount,
	Technology,
	User,
	UserLocation,
} from "./dashboard-data";
import { queryClient } from "@/components/query-client";
import { updateUserLocationController } from "@/backend/controllers/dashboard/user-location/update-user-location.controller";
import { updateTechnologiesController } from "@/backend/controllers/dashboard/technologies/update-technologies.controller";
import { jotaiStore } from "@/components/jotai-store";
import { dashboard_view_jotai, settings_view_atom } from "./dashboard-ui-state";
import { createSocials } from "@/backend/controllers/dashboard/socials/create-user-socials.controller";

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

export const mutate_socials_atom = atomWithMutation(() => ({
	mutationKey: ["mutate_socials"],
	mutationFn: async (socials: SocialAccount) => {
		const json = await createSocials(socials);
		console.log("json: ", json);
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
		jotaiStore.set(input_socials_atom, { platform: "Facebook", profile: "" });
	},
}));
