import { User } from "@/data/atoms/app_data";

export async function getUser() {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "/users/",
		);
		const {
			users: [user],
		} = await res.json();

		return user as User;
	} catch (error) {
		console.log("---getUser---\n", error);
		return {
			id: "",
			image: "/stud.jpg",
			name: "Failed to fetch user",
			video: null,
		} as User;
	}
}
