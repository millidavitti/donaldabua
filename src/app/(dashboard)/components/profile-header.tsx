"use client";
import Flex from "@/components/layouts/flex";
import React from "react";
import EditUserPhoto from "./edit-profile-user/edit-user-photo";
import EditUserName from "./edit-profile-user/edit-user-name";
import EditProfileUserLocation from "./edit-profile-user/edit-profile-user-location";

export default function ProfileHeader() {
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap'>
			<EditUserPhoto />
			<Flex flex='column' className='relative overflow-visible gap-3 grow'>
				<EditUserName />
				<EditProfileUserLocation />
			</Flex>
		</Flex>
	);
}
