"use client";
import Flex from "@/components/layouts/flex";
import EditUserPhoto from "./edit-profile-user/edit-user-photo";
import EditUserName from "./edit-profile-user/edit-user-name";
import EditUserLocation from "./edit-profile-user/edit-user-location";
import CreateProfile from "./create-profile";

export default function ProfileHeader() {
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap'>
			<EditUserPhoto />
			<Flex flex='column' className='relative overflow-visible gap-3 grow'>
				<EditUserName />
				<EditUserLocation />
			</Flex>
			<CreateProfile />
		</Flex>
	);
}
