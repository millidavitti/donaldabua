"use client";
import Flex from "@/components/layouts/flex";

import IntroVideo from "@/app/(dashboard)/components/edit-user/edit-intro-video";
import Availability from "@/app/(dashboard)/components/edit-profile/edit-availability";
import Socials from "@/app/(dashboard)/components/edit-user/edit-socials";
import Social from "@/app/(dashboard)/components/edit-user/social";
import SocialsHeader from "@/app/(dashboard)/components/edit-user/socials-header";
import { DELAY } from "@/data/home/home-constants";

export default function Sidebar() {
	return (
		<Flex
			flex='column'
			className='grow lg:shrink-0 lg:basis-80 p-0 border-0 gap-3'
		>
			<IntroVideo />
			<Flex flex='column' className='grow p-0 border-0 gap-3'>
				<Availability />
				<Socials>
					{(socials) => (
						<>
							<SocialsHeader />
							{/* Socials*/}
							<Flex flex='column' className='gap-3 border-0 p-0'>
								{socials?.map((social, i) => (
									<a
										key={social.id}
										href={social.profile}
										style={{ animationDelay: i * DELAY + "ms" }}
									>
										<Social social={social} />
									</a>
								))}
							</Flex>
						</>
					)}
				</Socials>
			</Flex>
		</Flex>
	);
}
