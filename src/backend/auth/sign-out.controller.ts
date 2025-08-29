import { generateErrorLog } from "@/utils/generate-error-log";

export async function signOut() {
	try {
		await fetch("auth/sign-out", {
			method: "GET",
			credentials: "include",
		});
	} catch (error) {
		generateErrorLog("backend/auth/sign-out.controller.ts", error);
	}
}
