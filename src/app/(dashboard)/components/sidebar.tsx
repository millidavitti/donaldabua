"use client";
import Flex from "@/components/layouts/flex";
import IntroVideo from "./user/intro-video";
import Availability from "./user/availability";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Trash2, Plus, EditIcon } from "lucide-react";
import { Social } from "./user/social";
import Socials from "./user/socials";

export default function Sidebar() {
	return (
		<Flex
			flex='column'
			className='gap-3 p-0 border-0 grow lg:shrink-0 lg:basis-80'
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
			<Flex flex='column' className='gap-3 p-0 border-0 grow'>
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
						<Trash2 className='hidden transition cursor-pointer stroke-light-error active:scale-95 group-hover:block' />
					</InteractiveIcon>
				</Socials>
			</Flex>
		</Flex>
	);
}
