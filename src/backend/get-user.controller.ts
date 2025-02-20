import { User } from "@/data/atoms/app_data";

export async function getUser() {
	const res = await fetch(
		process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/users/",
	);
	const {
		users: [user],
	} = await res.json();

	return user as User;
}
