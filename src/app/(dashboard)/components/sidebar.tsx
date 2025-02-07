"use client";
import Flex from "@/components/layouts/flex";

import React from "react";
import EditProfileVideoIntroduction from "./profile/edit-profile-video-introduction";
import EditProfileAvailability from "./edit-profile-availability";
import EditProfileSocials from "./profile/edit-profile-socials";

export default function Sidebar() {
	return (
		<Flex flex='column' className='grow gap-3 lg:shrink-0 lg:basis-80'>
			<EditProfileVideoIntroduction />
			<Flex flex='column' className='grow gap-3'>
				<EditProfileAvailability />
				<EditProfileSocials />
			</Flex>
		</Flex>
	);
}
