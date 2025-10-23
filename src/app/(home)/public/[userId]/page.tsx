"use client";
import Flex from "@/components/layouts/flex";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import Projects from "@/app/(dashboard)/components/project/projects";
import HourlyRate from "@/app/(dashboard)/components/profile/hourly-rate";
import Overview from "@/app/(dashboard)/components/profile/overview";
import ProfileTitle from "@/app/(dashboard)/components/profile/title";
import Header from "@/app/(dashboard)/components/header";
import SelectProfile from "@/app/(dashboard)/components/select-profile";
import DisplayPicture from "@/app/(dashboard)/components/user/display-picture";
import Name from "@/app/(dashboard)/components/user/name";
import Location from "@/app/(dashboard)/components/user/location";
import Image from "next/image";
import Availability from "@/app/(dashboard)/components/user/availability";
import IntroVideo from "@/app/(dashboard)/components/user/intro-video";
import Socials from "@/app/(dashboard)/components/user/socials";
import { Social } from "@/app/(dashboard)/components/user/social";
export default function ProjectVault() {
	return (
		<>
			<Flex
				className={cn("w-full h-full gap-3", getAnimationClass("neonScan"))}
				flex='column'
			>
				<Header />
				<Flex className='h-full gap-3 p-0 border-0' flex='column'>
					{/* User info */}
					<Flex
						className='flex-wrap gap-3 overflow-visible shrink-0'
						id='user-info'
					>
						<DisplayPicture>
							{(image) => (
								<Flex className='rounded-full shrink-0 p-0 h-24 w-24 cursor-pointer active:scale-[.99] overflow-clip'>
									{Boolean(image) && (
										<Image
											src={image || "/stud.jpg"}
											width={1000}
											height={1000}
											alt='donald'
											className='object-cover'
										/>
									)}
								</Flex>
							)}
						</DisplayPicture>
						<Flex
							flex='column'
							className='relative overflow-visible gap-3 grow-[256]'
						>
							<Name>
								{(name) => (
									<h2 className='h-10 text-2xl font-bold cursor-pointer md:text-4xl'>
										{name}
									</h2>
								)}
							</Name>
							<Location>
								{(location) => (
									<p className='font-medium cursor-pointer'>
										{location?.city}, {location?.country}
									</p>
								)}
							</Location>
						</Flex>
						<Flex className='flex-wrap self-start gap-3 p-0 border-0 grow'>
							<SelectProfile />
						</Flex>
					</Flex>
					{/* Sidebar */}
					<Flex className='flex-wrap gap-3 p-0 border-0 grow shrink-0 h-fit'>
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
						<Flex
							className='basis-[720px] grow-[2] border-0 p-0 gap-3'
							flex='column'
						>
							<Flex flex='column' className='gap-3 p-0 border-0'>
								<Flex className='flex-wrap justify-between gap-3 shrink-0 md:flex-nowrap outline-0'>
									<ProfileTitle />
									<HourlyRate />
								</Flex>
								<Overview />
							</Flex>
							<Flex flex='column' className='gap-3 p-0 border-0'>
								<a href='#projects'>
									{/* Header */}
									<Flex className='items-center justify-between shrink-0'>
										<p className='font-semibold lg:text-2xl'>Projects</p>
									</Flex>
								</a>
								<Projects />
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
