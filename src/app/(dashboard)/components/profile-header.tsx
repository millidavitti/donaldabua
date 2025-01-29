"use client";
import Flex from "@/components/layouts/flex";
import React from "react";
import EditProfilePhoto from "./edit-profile-photo";
import EditProfileName from "./edit-profile-name";
import EditProfileLocation from "./edit-profile-location";
export default function ProfileHeader() {
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap'>
			<EditProfilePhoto />
			<Flex
				flex='column'
				className='relative overflow-visible gap-3 grow lg:grow-0'
			>
				<EditProfileName />
				<EditProfileLocation />
			</Flex>
		</Flex>
	);
}
