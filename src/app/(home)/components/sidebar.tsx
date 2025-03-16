"use client";
import Flex from "@/components/layouts/flex";

import UserVideo from "./user/user-video";
import UserSocials from "./user/user-socials";
import ProfileAvailability from "./profile/profile-availability";

export default function Sidebar() {
	return (
		<Flex flex='column' className='grow gap-3 lg:shrink-0 lg:basis-80'>
			<UserVideo />
			<Flex flex='column' className='grow gap-3'>
				<ProfileAvailability />
				<UserSocials />
			</Flex>
		</Flex>
	);
}
