"use client";
import Flex from "@/components/layouts/flex";

import IntroVideo from "@/app/(dashboard)/components/user/intro-video";
import Availability from "@/app/(dashboard)/components/profile/edit-availability";
import Socials, { Social } from "@/app/(dashboard)/components/user/socials";

export default function Sidebar() {
	return (
		<Flex
			flex='column'
			className='gap-3 p-0 border-0 grow lg:shrink-0 lg:basis-80'
		>
			<IntroVideo />
			<Flex flex='column' className='gap-3 p-0 border-0 grow'>
				<Availability />
				<Socials>
					<Social slot='link' />
				</Socials>
			</Flex>
		</Flex>
	);
}
