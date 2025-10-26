import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";
import { generateErrorLog } from "./utils/generate-error-log";
export async function middleware(request: NextRequest) {
	const Cookies = await cookies();
	const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
	const isAuth = async () => {
		const cookie = Cookies.get("__Secure-portfolio.authenticated");
		try {
			await jwtVerify(cookie?.value as string, secret);
			return true;
		} catch (error) {
			generateErrorLog("middleware", error, "slient");
			Cookies.delete({
				path: "/",
				secure: true,
				name: "__Secure-portfolio.authenticated",
				domain: process.env.COOKIE_DOMAIN,
				httpOnly: true,
				sameSite: "none",
			});
			return false;
		}
	};

	if (request.nextUrl.pathname.startsWith("/public")) {
		const userId = request.nextUrl.pathname.split("/")[2];

		const jwt = await new SignJWT()
			.setProtectedHeader({ alg: "HS256" })
			.setIssuedAt(Math.floor(Date.now() / 1000))
			.setSubject(userId)
			.setIssuer("Ronin Ubermensch")
			.sign(secret);

		Cookies.set({
			value: jwt,
			path: "/",
			secure: true,
			name: "__Secure-portfolio.guest",
			domain: process.env.COOKIE_DOMAIN,
			httpOnly: true,
			sameSite: "none",
		});
	} else if (await isAuth()) {
		Cookies.delete({
			path: "/",
			secure: true,
			name: "__Secure-portfolio.authenticating",
			domain: process.env.COOKIE_DOMAIN,
			httpOnly: true,
			sameSite: "none",
		});
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
	matcher: ["/public/:path", "/auth/:path", "/dashboard"],
};
