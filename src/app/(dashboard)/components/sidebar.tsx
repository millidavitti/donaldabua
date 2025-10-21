"use client";
import Flex from "@/components/layouts/flex";

import IntroVideo from "./edit-user/edit-intro-video";
import Socials from "./edit-user/edit-socials";
import Availability from "./edit-profile/edit-availability";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Trash2, Plus, EditIcon } from "lucide-react";
import { DELAY } from "@/data/home/home-constants";
import Social from "./edit-user/social";
import SocialsHeader from "./edit-user/socials-header";

export default function Sidebar() {
	return (
		<Flex
			flex='column'
			className='grow gap-3 lg:shrink-0 lg:basis-80 border-0 p-0'
		>
			<IntroVideo>
				{(video, start, remove) => (
					<>
						{Boolean(video) && (
							<InteractiveIcon callback={remove}>
								<Trash2 size={24} />
							</InteractiveIcon>
						)}
						{Boolean(video) || (
							<InteractiveIcon callback={start}>
								<Plus size={24} />
							</InteractiveIcon>
						)}
					</>
				)}
			</IntroVideo>
			<Flex flex='column' className='grow gap-3 border-0 p-0'>
				<Availability>
					{(start) => (
						<InteractiveIcon callback={start}>
							<EditIcon size={24} />
						</InteractiveIcon>
					)}
				</Availability>
				<Socials>
					{(socials, start, remove) => (
						<>
							<SocialsHeader>
								<InteractiveIcon
									onClick={() => {
										start("create");
									}}
								>
									<Plus size={24} />
								</InteractiveIcon>
							</SocialsHeader>
							{/* Socials*/}
							<Flex flex='column' className='gap-3 border-0 p-0'>
								{socials?.map((social, i) => (
									<div
										style={{ animationDelay: i * DELAY + "ms" }}
										key={social.id}
									>
										<Social social={social} remove={remove} start={start} />
									</div>
								))}
							</Flex>
						</>
					)}
				</Socials>
			</Flex>
		</Flex>
	);
}
