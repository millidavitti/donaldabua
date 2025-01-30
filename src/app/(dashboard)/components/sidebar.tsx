"use client";
import Flex from "@/components/layouts/flex";

import React from "react";
import EditVideoIntroduction from "./edit-video-introduction";
import EditAvailability from "./edit-availability";
import EditSocials from "./edit-socials";

export default function Sidebar() {
	return (
		<Flex flex='column' className='grow gap-3 lg:shrink-0 lg:basis-80'>
			<EditVideoIntroduction />
			<Flex flex='column' className='grow gap-3'>
				<EditAvailability />
				<EditSocials />
			</Flex>
		</Flex>
	);
}
