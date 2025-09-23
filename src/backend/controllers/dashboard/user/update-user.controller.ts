import { User } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function updateUser(update: Partial<User>) {
	try {
		const res = await fetch(ENDPOINTS.user.update(), {
			method: "put",
			body: JSON.stringify(update),
			headers: {
				"content-type": "application/json",
			},
			credentials: "include",
		});
		const json = await res.json();
		return json;
	} catch (error) {
		generateErrorLog("@updateUser.controller", error);
	}
}
