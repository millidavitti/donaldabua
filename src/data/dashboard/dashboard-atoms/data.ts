import { updateUserController } from "@/backend/controllers/dashboard/user/update-user.controller";
import { generateErrorLog } from "@/utils/generate-error-log";
import { getErrorMessage } from "@/utils/get-error-message";
import { atom } from "jotai";
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { toast } from "sonner";
import { User } from "./dashboard-data";
import { queryClient } from "@/components/query-client";

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

export const technologies_jotai = atom([]);

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
