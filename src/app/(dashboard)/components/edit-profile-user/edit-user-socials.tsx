"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Button from "@/components/ui/button";
import useEditSocials from "@/hooks/interface/dashboard/use-edit-socials.interface";
import { Plus, Trash2, X } from "lucide-react";
import SelectSocialPlatform from "../select-social-platform";
import Image from "next/image";
import {
	DELAY,
	SOCIAL_PLATFORM_ICONS,
} from "@/data/dashboard/dashboard-constants";
import { SocialPlatforms } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { HashLoader } from "react-spinners";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import Modal from "@/components/layouts/modal";

export default function EditUserSocials() {
	const { socials, remove, toggleForm, Modal } = useEditSocials();

	return (
		<>
			{Modal}
			<Flex flex='column' className='grow gap-3' htmlProps={{ id: "socials" }}>
				<a href='#socials' className='shrink-0'>
					<Flex className='h-fit items-center justify-between'>
						<p className='font-semibold lg:text-2xl'>Socials</p>
						<InteractiveIcon
							callback={() => {
								toggleForm("create");
							}}
						>
							<Plus size={24} />
						</InteractiveIcon>
					</Flex>
				</a>
				{/* Socials */}
				<Flex flex='column' className='gap-3 h-full border-0 p-0'>
					{socials?.map((social, i) => (
						<Flex
							key={social.id}
							className={cn(
								"group shrink-0 bg-light-surface-surface-container gap-3 font-semibold justify-between",
								getAnimationClass("swing-in-top-fwd"),
							)}
							htmlProps={{ style: { animationDelay: i * DELAY + "ms" } }}
						>
							<span
								className='flex w-full gap-3 active:scale-95 transition cursor-pointer'
								onClick={() => {
									toggleForm("update", social);
								}}
							>
								<Image
									src={SOCIAL_PLATFORM_ICONS[social.platform]}
									width={24}
									height={24}
									alt={social.platform}
								/>
								{social.platform}
							</span>
							<Trash2
								className='stroke-light-error active:scale-95 transition group-hover:block hidden cursor-pointer'
								onClick={() => remove(social)}
							/>
						</Flex>
					))}
				</Flex>
			</Flex>
		</>
	);
}
