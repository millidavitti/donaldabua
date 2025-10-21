"use client";
import Flex from "@/components/layouts/flex";
import DisplayPicture from "@/app/(dashboard)/components/edit-user/edit-display-picture";
import Image from "next/image";
import Name from "@/app/(dashboard)/components/edit-user/edit-name";
import Location from "@/app/(dashboard)/components/edit-user/edit-location";
import SelectProfile from "@/app/(dashboard)/components/select-profile";

export default function User() {
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap outline-0'>
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
						<h2 className='font-bold text-4xl cursor-pointer data-[is-visible=false]:absolute data-[is-visible=true]:hidden h-10'>
							{name}
						</h2>
					)}
				</Name>
				<Location>
					{(location) => (
						<p className='cursor-pointer font-medium'>
							{location?.city}, {location?.country}
						</p>
					)}
				</Location>
			</Flex>
			<SelectProfile />
		</Flex>
	);
}
