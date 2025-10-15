import { generateErrorLog } from "@/utils/generate-error-log";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
	try {
		const Cookies = await cookies();
		Cookies.delete({
			path: "/",
			secure: true,
			name: "__Secure-portfolio.authenticated",
		});
		redirect("/auth/sign-in");
	} catch (error) {
		generateErrorLog("app/auth/sign-out", error);
	}
}
