"use server";
import { NextRequest } from "next/server";
import { getErrorMessage } from "./get-error-message";

export async function auth(request: NextRequest) {
	try {
		const res = await fetch(process.env.BACKEND_API_ENDPOINT + "/ping/", {
			method: "GET",
			credentials: "include",
			headers: { Cookie: request.headers.get("cookie") || "" }, // Forward cookies
		});

		const data = await res.json();

		return data as auth;
	} catch (error) {
		console.error("---isAuth---", error);
		return { error: getErrorMessage(error) } as auth;
	}
}

type auth = {
	user?: { id: string; expires: string };
	error?: string;
	isAuthenticated: boolean;
};
