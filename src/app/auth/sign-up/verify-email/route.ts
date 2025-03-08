import { getErrorMessage } from "@/utils/get-error-message";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const res = await fetch(
			`${process.env.AUTH_ENDPOINT!}/verify-email/${searchParams.get(
				"verification-token",
			)}`,
			{ method: "GET", headers: req.headers },
		);

		const { error, status } = await res.json();

		if (error) throw new Error(error);

		return new Response(null, {
			status: 302,
			headers: {
				...Object.fromEntries(res.headers.entries()),
				Location: `${process.env.ORIGIN}/auth/sign-in?verified=${status}`,
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
			},
		});
	}
}
