"use client";
import Flex from "@/components/layouts/flex";
import React from "react";
import EditProfilePhoto from "./edit-profile-photo";
import EditProfileName from "./edit-profile-name";
import EditProfileLocation from "./edit-profile-location";
import { useAtomValue } from "jotai";
import { profile_jotai } from "@/data/atoms/app_data";
export default function ProfileHeader() {
	const profile = useAtomValue(profile_jotai);
	console.log(profile);
	return (
		<Flex className='shrink-0 gap-3 overflow-visible flex-wrap'>
			<EditProfilePhoto />
			<Flex flex='column' className='relative overflow-visible gap-3'>
				<EditProfileName />
				<EditProfileLocation />
			</Flex>
		</Flex>
	);
}
