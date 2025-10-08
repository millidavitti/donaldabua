import { generateErrorLog } from "@/utils/generate-error-log";
import { getErrorMessage } from "@/utils/get-error-message";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		console.log("Headers: ", Object.fromEntries(req.headers.entries()));

		const res = await fetch(
			`${process.env.AUTH_ENDPOINT!}/verify-email/${searchParams.get("token")}`,
			{
				method: "GET",
				// headers: {
				// 	Cookie: req.headers.get("Cookie") ?? "",
				// 	"Content-Type": "appilcation/json",
				// },
			},
		);
		console.log("Response: ", await res.clone().text());
		const json = await res.json();

		return new Response(null, {
			status: 302,
			headers: {
				...Object.fromEntries(res.headers.entries()),
				Location: `/auth/sign-in?message=${json.message}`,
			},
		});
	} catch (error) {
		generateErrorLog("auth/sign-up/verify-email", error, "slient");
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
