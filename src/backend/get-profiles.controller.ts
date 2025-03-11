import { APIResponse, UserProfile } from "@/data/atoms/app_data";
import { getErrorMessage } from "@/utils/get-error-message";
import { useId } from "react";

export async function getProfilesController(userId: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT! +
				"/profiles/user/" +
				userId,
			{
				method: "GET",
				credentials: "include",
			},
		);
		const data = await res.json();

		return data as APIResponse<UserProfile[], "profiles">;
	} catch (error) {
		console.error("---getProfilesController---\n", error);
		throw new Error(getErrorMessage(error));
	}
}
