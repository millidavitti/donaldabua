"use client";
import Flex from "@/components/layouts/flex";

import React from "react";
import EditProfileVideoIntroduction from "./profile/edit-profile-video-introduction";
import EditProfileSocials from "./profile/edit-profile-socials";
import EditProfileAvailability from "./profile/edit-profile-availability";

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
