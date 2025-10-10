import { generateErrorLog } from "@/utils/generate-error-log";
import { getErrorMessage } from "@/utils/get-error-message";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const endpoint = `${process.env.AUTH_ENDPOINT!}/sign-in`;
		const res = await fetch(endpoint, {
			method: "get",
			headers: req.headers,
		});

		const json = await res.json();
		const headers = Object.fromEntries(res.headers.entries());

		return new Response(null, {
			status: 302,
			headers: {
				...headers,
				Location: `/auth/sign-in?message=${json.message}`,
			},
		});
	} catch (error) {
		generateErrorLog(
			"@src/app/auth/sign-in/verification/route.ts",
			error,
			"slient",
		);
		return new Response(null, {
			status: 302,
			headers: {
				Location: `/auth/sign-in?message=${
					JSON.parse(getErrorMessage(error)).message
				}`,
			},
		});
	}
}
