"use client";
import Flex from "@/components/layouts/flex";

import React from "react";
import EditUserVideo from "./edit-profile-user/edit-user-video";
import EditProfileUserSocials from "./edit-profile-user/edit-profile-user-socials";
import EditProfileUserAvailability from "./edit-profile/edit-profile-availability";

export default function Sidebar() {
	return (
		<Flex flex='column' className='grow gap-3 lg:shrink-0 lg:basis-80'>
			<EditUserVideo />
			<Flex flex='column' className='grow gap-3'>
				<EditProfileUserAvailability />
				<EditProfileUserSocials />
			</Flex>
		</Flex>
	);
}
