import { ENDPOINTS } from "@/backend/endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function deleteSocial(socialId: string) {
	try {
		const res = await fetch(ENDPOINTS.socials.delete(socialId), {
			method: "DELETE",
			credentials: "include",
		});
		const json = await res.json();
		return json;
	} catch (error) {
		generateErrorLog("@deleteSocials.controller", error);
	}
}
