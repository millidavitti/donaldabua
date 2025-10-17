"use client";
import Flex from "@/components/layouts/flex";
import EditDisplayPicture from "./edit-profile-user/edit-display-picture";
import EditName from "./edit-profile-user/edit-name";
import EditLocation from "./edit-profile-user/edit-location";
import CreateProfile from "./create-profile";
import SelectProfile from "./select-profile";

export default function UserHeader() {
	return (
		<Flex
			className='shrink-0 gap-3 overflow-visible flex-wrap'
			htmlProps={{ id: "user-info" }}
		>
			<EditDisplayPicture />
			<Flex
				flex='column'
				className='relative overflow-visible gap-3 grow-[256]'
			>
				<EditName />
				<EditLocation />
			</Flex>
			<Flex className='gap-3 self-start flex-wrap grow border-0 p-0'>
				<CreateProfile />
				<SelectProfile />
			</Flex>
		</Flex>
	);
}
