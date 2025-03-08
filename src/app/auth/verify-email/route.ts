import { getErrorMessage } from "@/utils/get-error-message";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const res = await fetch(
			`${process.env.AUTH_ENDPOINT!}/verify-email/${searchParams.get(
				"email",
			)}/${searchParams.get("verification-token")}`,
			{ method: "GET", headers: req.headers },
		);

		const { error, status } = await res.json();

		if (error) throw new Error(error);

		return new Response(null, {
			status: 302,
			headers: {
				Location: `${process.env.ORIGIN}/auth/sign-in?verified=${status}`,
				"Set-cookie":
					"connect.sid=; path=/; expires=Thu, 1 Jan 1970 00:00:00 GMT;",
			},
		});
	} catch (error) {
		console.error("---verifyEmailRoute---\n", error);
		return new Response(null, {
			status: 302,
			headers: {
				Location: `${
					process.env.ORIGIN
				}/auth/sign-in?verificationError=${getErrorMessage(error)}`,
				"Set-Cookie":
					"connect.sid=; path=/; expires=Thu, 1 Jan 1970 00:00:00 GMT;",
			},
		});
	}
}
