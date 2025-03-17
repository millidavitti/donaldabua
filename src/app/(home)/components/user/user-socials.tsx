"use client";
import Flex from "@/components/layouts/flex";
import Image from "next/image";
import {
	DELAY,
	SOCIAL_PLATFORM_ICONS,
} from "@/data/dashboard/dashboard-constants";
import { user_socials_snapshot_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import { useAtomValue } from "jotai";

export default function UserSocials() {
	const user_socials_snapshot = useAtomValue(user_socials_snapshot_jotai);
	return (
		<>
			<Flex flex='column' className='grow gap-3' htmlProps={{ id: "socials" }}>
				<a href='#socials' className='shrink-0'>
					<Flex className='h-fit items-center justify-between'>
						<p className='font-semibold lg:text-2xl'>Socials</p>
					</Flex>
				</a>
				{/* Added Socials */}
				<Flex flex='column' className='gap-3 h-full'>
					{user_socials_snapshot.map((social_account, i) => (
						<Flex
							key={social_account.id}
							className={cn(
								"group shrink-0 bg-light-surface-surface-container gap-3 font-semibold justify-between",
								getAnimationClass("swing-in-top-fwd"),
							)}
							htmlProps={{ style: { animationDelay: i * DELAY + "ms" } }}
						>
							<a
								href={social_account.profile}
								target='_blank'
								rel='noopener noreferrer'
								className='w-full'
							>
								<span className='flex gap-3 active:scale-95 transition cursor-pointer'>
									<Image
										src={SOCIAL_PLATFORM_ICONS[social_account.platform]}
										width={24}
										height={24}
										alt={social_account.platform}
									/>
									{social_account.platform}
								</span>
							</a>
						</Flex>
					))}
				</Flex>
			</Flex>
		</>
	);
}
