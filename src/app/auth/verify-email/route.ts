import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const res = await fetch(
		process.env.NEXT_PUBLIC_AUTH_ENDPOINT! +
			"/verify-email/" +
			searchParams.get("email"),
		{ method: "POST" },
	);
	await res.json();
	return Response.redirect("http://localhost:3000/auth/sign-in?verified=true");
}
