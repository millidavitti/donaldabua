"use client";
import Flex from "@/components/layouts/flex";
import { PackageOpen } from "lucide-react";
import { HashLoader } from "react-spinners";
import { cloneElement, ReactNode } from "react";
import { DELAY } from "@/data/home/home-constants";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import Slot from "@/components/layouts/slot";
import useSocials from "./interfaces/use-socials.interface";

interface Socials {
	children: ReactNode;
}

export default function Socials({ children }: Socials) {
	const { socials, remove, start, isFetching, slots, Modal, Dialog } =
		useSocials(children);

	return (
		<>
			{Modal}
			{Dialog}
			<Flex flex='column' className='gap-3 grow'>
				<a href='#socials' className='shrink-0'>
					<Flex className='items-center justify-between h-fit'>
						<p className='font-semibold lg:text-2xl'>Socials</p>
						<Slot name='create' slots={slots}>
							{(element) =>
								cloneElement(element, { onClick: () => start("create") })
							}
						</Slot>
					</Flex>
				</a>
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
							<Slot name='update' slots={slots}>
								{(element) =>
									cloneElement(element, {
										onClick: () => start("update", social),
										social,
									})
								}
							</Slot>
							<Slot name='link' slots={slots}>
								{(element) => (
									<a href={social.profile} target='_blank' className='w-full'>
										{cloneElement(element, { social })}
									</a>
								)}
							</Slot>
							<Slot name='remove' slots={slots}>
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
