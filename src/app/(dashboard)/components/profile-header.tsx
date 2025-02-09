"use client";
import Flex from "@/components/layouts/flex";
import React from "react";
import EditProfileUserPhoto from "./edit-profile-user/edit-profile-user-photo";
import EditProfileUserName from "./edit-profile-user/edit-profile-user-name";
import EditProfileUserLocation from "./edit-profile-user/edit-profile-user-location";

export default function ProfileHeader() {
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap'>
			<EditProfileUserPhoto />
			<Flex
				flex='column'
				className='relative overflow-visible gap-3 grow lg:grow-0'
			>
				<EditProfileUserName />
				<EditProfileUserLocation />
			</Flex>
		</Flex>
	);
}
