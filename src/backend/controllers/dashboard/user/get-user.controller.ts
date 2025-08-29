import { ENDPOINTS } from "../../../endpoints/endpoints";
import { generateErrorLog } from "@/utils/generate-error-log";

export async function getUserController() {
	try {
		const res = await fetch(ENDPOINTS.user.getUser(), {
			method: "GET",
			credentials: "include",
		});
		const json = await res.json();

		return json;
	} catch (error) {
		generateErrorLog("@getUserController", error);
	}
}
