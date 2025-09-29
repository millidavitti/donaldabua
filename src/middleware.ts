import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { generateErrorLog } from "./utils/generate-error-log";

export async function middleware(request: NextRequest) {
	const Cookies = await cookies();
	const isAuth = await (async () => {
		const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
		const cookie = Cookies.get("__Host-portfolio.authenticated");
		try {
			await jwtVerify(cookie?.value as string, secret);
			return true;
		} catch (error) {
			generateErrorLog("middleware", error, "slient");
			Cookies.delete("__Host-portfolio.authenticated");
			return false;
		}
	})();

	if (isAuth) {
		Cookies.delete("__Host-portfolio.authenticating");
		if (
			request.nextUrl.pathname === "/auth/sign-in" ||
			request.nextUrl.pathname === "/auth/sign-up"
		)
			return NextResponse.redirect(new URL("/dashboard", request.url));
	} else {
		if (request.nextUrl.pathname === "/dashboard") {
			return NextResponse.redirect(new URL("/auth/sign-in", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/auth/sign-in", "/auth/sign-up", "/dashboard"],
};
