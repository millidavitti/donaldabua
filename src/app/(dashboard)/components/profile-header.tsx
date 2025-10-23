"use client";
import Flex from "@/components/layouts/flex";
import DisplayPicture from "./user/display-picture";
import Name from "./user/name";
import Location from "./user/location";
import CreateProfile from "./create-profile";
import SelectProfile from "./select-profile";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Trash2 } from "lucide-react";

export default function UserHeader() {
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap' id='user-info'>
			<DisplayPicture>
				{(image, edit) => (
					<Flex
						className='rounded-full shrink-0 p-0 h-24 w-24 cursor-pointer active:scale-[.99] overflow-clip'
						onClick={edit}
					>
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
					{(name, edit) => (
						<h2
							className='font-bold text-4xl cursor-pointer data-[is-visible=false]:absolute data-[is-visible=true]:hidden h-10'
							onClick={edit}
						>
							{name}
						</h2>
					)}
				</Name>
				<Location>
					{(location, start) => (
						<p onClick={start} className='cursor-pointer font-medium'>
							{location?.city}, {location?.country}
						</p>
					)}
				</Location>
			</Flex>
			<Flex className='gap-3 self-start flex-wrap grow border-0 p-0'>
				<CreateProfile />
				<SelectProfile>
					{(profileId, remove) => (
						<Trash2
							className={cn(
								"stroke-light-error shrink-0 self-center cursor-pointer active:scale-95 transition",
							)}
							onClick={() => remove({ id: profileId })}
						/>
					)}
				</SelectProfile>
			</Flex>
		</Flex>
	);
}
