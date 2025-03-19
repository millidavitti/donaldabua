"use client";
import Flex from "@/components/layouts/flex";

import React from "react";
import EditUserVideo from "./edit-profile-user/edit-user-video";
import EditUserSocials from "./edit-profile-user/edit-user-socials";
import EditProfileUserAvailability from "./edit-profile/edit-profile-availability";

export default function Sidebar() {
	return (
		<Flex
			flex='column'
			className='grow gap-3 lg:shrink-0 lg:basis-80 border-0 p-0'
		>
			<EditUserVideo />
			<Flex flex='column' className='grow gap-3 border-0 p-0'>
				<EditProfileUserAvailability />
				<EditUserSocials />
			</Flex>
		</Flex>
	);
}
