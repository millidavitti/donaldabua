import { NextRequest } from "next/server";
import { getErrorMessage } from "./get-error-message";
import { ENDPOINTS } from "../backend/endpoints/endpoints";

export async function auth(request?: NextRequest) {
	try {
		const res = await fetch(ENDPOINTS.ping.read, {
			method: "GET",
			credentials: "include",
			headers: { Cookie: request?.headers.get("cookie") || "" }, // Forward cookies
		});

		const data = await res.json();

		return data as auth;
	} catch (error) {
		console.error("---auth---", error);
		return { error: getErrorMessage(error) } as auth;
	}
}

export async function signOut() {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_AUTH_ENDPOINT + "/sign-out",
			{
				method: "GET",
				credentials: "include",
			},
		);
		const { error, isAuthenticated } = await res.json();
		console.log({ error, isAuthenticated });
		if (error) throw new Error(error);
		else if (isAuthenticated) return { isAuthenticated };
	} catch (error) {
		console.error("---signOut---", error);
		throw new Error(getErrorMessage(error));
	}
}

type auth = {
	user?: { id: string; expires: string };
	error?: string;
	isAuthenticated: boolean;
};
