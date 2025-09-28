import { getErrorMessage } from "@/utils/get-error-message";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const res = await fetch(`${process.env.AUTH_ENDPOINT!}/sign-in`, {
			method: "get",
			headers: req.headers,
			credentials: "include",
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
		console.error("---Sing In Verification Route---\n", error);
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
