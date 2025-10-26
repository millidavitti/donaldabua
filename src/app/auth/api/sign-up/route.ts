import { generateErrorLog } from "@/utils/generate-error-log";
import { getErrorMessage } from "@/utils/get-error-message";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const endpoint = `${process.env.AUTH_ENDPOINT!}/sign-up/${searchParams.get(
			"token",
		)}`;

		const res = await fetch(endpoint, {
			method: "GET",
			headers: {
				Cookie: req.headers.get("Cookie") ?? "",
				"Content-Type": "appilcation/json",
			},
		});

		const json = await res.json();

		return new Response(null, {
			status: 302,
			headers: {
				...Object.fromEntries(res.headers.entries()),
				Location: `/auth/sign-in?message=${json.message}`,
			},
		});
	} catch (error) {
		generateErrorLog("auth/api/sign-up", error, "slient");
		return new Response(null, {
			status: 302,
			headers: {
				Location: `/auth/sign-up?message=${
					JSON.parse(getErrorMessage(error)).message
				}`,
			},
		});
	}
}
