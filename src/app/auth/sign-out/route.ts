import { generateErrorLog } from "@/utils/generate-error-log";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET() {
	try {
		const Cookies = await cookies();
		Cookies.delete("portfolio.authenticated");

		return new Response(null);
	} catch (error) {
		generateErrorLog("app/auth/sign-out", error);
	} finally {
		redirect("/auth/sign-in");
	}
}
