"use client";
import Flex from "@/components/layouts/flex";
import EditProfileTitle from "./edit-profile-title";
import EditProfileHourlyRate from "./edit-profile-hourly-rate";
import EditProfileOverview from "./edit-profile-overview";

export default function EditProfileSummary() {
	return (
		<Flex flex='column' className='gap-3 border-0 p-0'>
			<Flex className='shrink-0 justify-between flex-wrap gap-3'>
				<EditProfileTitle />
				<EditProfileHourlyRate />
			</Flex>
			<EditProfileOverview />
		</Flex>
	);
}
