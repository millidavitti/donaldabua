"use client";
import Flex from "@/components/layouts/flex";

import React from "react";
import EditIntroVideo from "./edit-user/edit-intro-video";
import EditSocials from "./edit-user/edit-socials";
import EditAvailability from "./edit-profile/edit-availability";

export default function Sidebar() {
	return (
		<Flex
			flex='column'
			className='grow gap-3 lg:shrink-0 lg:basis-80 border-0 p-0'
		>
			<EditIntroVideo />
			<Flex flex='column' className='grow gap-3 border-0 p-0'>
				<EditAvailability />
				<EditSocials />
			</Flex>
		</Flex>
	);
}
