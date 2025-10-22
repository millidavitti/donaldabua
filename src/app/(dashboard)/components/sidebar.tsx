"use client";
import Flex from "@/components/layouts/flex";

import IntroVideo from "./edit-user/edit-intro-video";
import Socials, { Social } from "./edit-user/edit-socials";
import Availability from "./edit-profile/edit-availability";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Trash2, Plus, EditIcon } from "lucide-react";

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
					<InteractiveIcon slot='create'>
						<Plus size={24} />
					</InteractiveIcon>
					<Social slot='update' />
					<InteractiveIcon slot='remove' className='p-0'>
						<Trash2 className='stroke-light-error active:scale-95 transition group-hover:block hidden cursor-pointer' />
					</InteractiveIcon>
				</Socials>
			</Flex>
		</Flex>
	);
}
