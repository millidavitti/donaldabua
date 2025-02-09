import { ProfileUser } from "@/data/atoms/app_data";
import { createId } from "@paralleldrive/cuid2";

export async function getUser() {
	return {
		id: createId(),
		name: "Donald Abua",
		image:
			"https://res.cloudinary.com/torch-cms-media/image/upload/v1657611196/god_of_war_2018_video_game_wallpaper_1366x768_0ab2e9648c.jpg",
		video: "https://youtube.com/embed/-2k1rcRzsLA",
		location: {
			city: "New York",
			country: "United State",
		},
	} as ProfileUser;
}
