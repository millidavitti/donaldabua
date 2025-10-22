"use client";
import Flex from "@/components/layouts/flex";
import useSocials from "@/hooks/interface/dashboard/use-edit-socials.interface";
import { PackageOpen } from "lucide-react";
import { HashLoader } from "react-spinners";
import { cloneElement, ReactNode } from "react";
import { type Social } from "@/data/dashboard/dashboard-atoms/types";
import { DELAY, SOCIAL_PLATFORM_ICONS } from "@/data/home/home-constants";
import SocialsHeader from "./socials-header";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import Image from "next/image";

interface Socials {
	children: ReactNode;
}

export default function Socials({ children }: Socials) {
	const { socials, remove, start, isFetching, Modal, Slot } =
		useSocials(children);

	return (
		<>
			{Modal}
			<Flex flex='column' className='gap-3 grow'>
				<SocialsHeader>
					<Slot slot='create'>
						{(slot) => cloneElement(slot, { onClick: () => start("create") })}
					</Slot>
				</SocialsHeader>
				{/* Socials*/}
				<Flex flex='column' className='gap-3 p-0 border-0'>
					{socials?.map((social, i) => (
						<Flex
							key={social.id}
							style={{ animationDelay: i * DELAY + "ms" }}
							className={cn(
								"group shrink-0 bg-light-surface-surface-container gap-3 font-semibold justify-between",
								getAnimationClass("swing-in-top-fwd"),
							)}
						>
							<Slot slot='update'>
								{(slot) =>
									cloneElement(slot, {
										onClick: () => start("update", social),
										social,
									})
								}
							</Slot>
							<Slot slot='link'>
								{(slot) => (
									<a href={social.profile} target='_blank' className='w-full'>
										{cloneElement(slot, { social })}
									</a>
								)}
							</Slot>
							<Slot slot='remove'>
								{(slot) =>
									cloneElement(slot, { onClick: () => remove(social) })
								}
							</Slot>
						</Flex>
					))}
				</Flex>

				{!Boolean(socials?.length) && !isFetching && (
					<Flex flex='column' className='items-center mb-auto border-none'>
						<PackageOpen size={32} />
						<p className='font-medium'>You have no socials</p>
					</Flex>
				)}
				{isFetching && (
					<Flex flex='column' className='items-center m-auto border-none'>
						<HashLoader size={24} />
					</Flex>
				)}
			</Flex>
		</>
	);
}

export function Social({
	social,
	...props
}: {
	social?: Social;
	slot: string;
}) {
	return (
		<span
			{...props}
			className='flex w-full gap-3 transition cursor-pointer active:scale-95'
		>
			<Image
				src={SOCIAL_PLATFORM_ICONS[social?.platform || "Discord"]}
				width={24}
				height={24}
				alt={social?.platform || ""}
			/>
			{social?.platform}
		</span>
	);
}
