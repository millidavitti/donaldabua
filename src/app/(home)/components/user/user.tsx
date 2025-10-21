"use client";
import Flex from "@/components/layouts/flex";
import UserPhoto from "./user-photo";
import UserName from "./user-name";
import UserLocation from "./user-location";
import SelectProfile from "../select-profile";

export default function User() {
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap outline-0'>
			<UserPhoto />
			<Flex
				flex='column'
				className='relative overflow-visible gap-3 grow-[256]'
			>
				<UserName />
				<UserLocation />
			</Flex>
			<SelectProfile />
		</Flex>
	);
}
