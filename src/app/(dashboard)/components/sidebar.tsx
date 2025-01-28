"use client";
import Flex from "@/components/layouts/flex";

import React from "react";
import VideoIntroduction from "./video-introduction";
import EditAvailability from "./edit-availability";

export default function Sidebar() {
	return (
		<Flex flex='column' className='basis-80 grow gap-3 shrink-0'>
			<VideoIntroduction />
			<Flex flex='column'>
				<EditAvailability />
			</Flex>
		</Flex>
	);
}
