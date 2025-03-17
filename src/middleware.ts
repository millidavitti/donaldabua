import { NextRequest, NextResponse } from "next/server";
import { auth } from "./utils/auth";

export async function middleware(request: NextRequest) {
	const { isAuthenticated, user } = await auth(request);
	console.log("---isAuthenticated---\n", isAuthenticated, user);
	if (isAuthenticated) {
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
