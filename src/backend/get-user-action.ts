"use server";

import { ProfileUser } from "@/data/atoms/app_data";
import { createId } from "@paralleldrive/cuid2";

export async function getUser() {
	return {
		id: createId(),
		name: "Donald Abua",
		image: "/stud.jpg",
		video: "https://youtu.be/HLTin4qpMD8?si=11FGMPwaZ6M3LDYb",
		location: {
			city: "New York",
			country: "United State",
		},
	} as ProfileUser;
}
