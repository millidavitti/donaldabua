"use client";
import Flex from "@/components/layouts/flex";

import UserVideo from "./user/user-video";
import UserSocials from "./user/user-socials";
import ProfileAvailability from "./profile/profile-availability";

export default function Sidebar() {
	return (
		<Flex
			flex='column'
			className='grow lg:shrink-0 lg:basis-80 p-0 border-0 gap-3'
		>
			<UserVideo />
			<Flex flex='column' className='grow p-0 border-0 gap-3'>
				<ProfileAvailability />
				<UserSocials />
			</Flex>
		</Flex>
	);
}
