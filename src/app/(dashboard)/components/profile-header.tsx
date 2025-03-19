"use client";
import Flex from "@/components/layouts/flex";
import EditUserPhoto from "./edit-profile-user/edit-user-photo";
import EditUserName from "./edit-profile-user/edit-user-name";
import EditUserLocation from "./edit-profile-user/edit-user-location";
import CreateProfile from "./create-profile";
import SelectProfile from "./select-profile";

export default function UserHeader() {
	return (
		<Flex
			className='shrink-0 gap-3 overflow-visible flex-wrap'
			htmlProps={{ id: "user-info" }}
		>
			<EditUserPhoto />
			<Flex
				flex='column'
				className='relative overflow-visible gap-3 grow-[256]'
			>
				<EditUserName />
				<EditUserLocation />
			</Flex>
			<Flex className='gap-3 self-start flex-wrap grow border-0 p-0'>
				<CreateProfile />
				<SelectProfile />
			</Flex>
		</Flex>
	);
}
