"use client";
import Flex from "@/components/layouts/flex";
import EditTitle from "./edit-title";
import EditHourlyRate from "./edit-hourly-rate";
import EditProfileOverview from "./edit-profile-overview";

export default function EditDeveloperSummary() {
	return (
		<Flex flex='column' className='gap-3'>
			<Flex className='shrink-0 justify-between flex-wrap gap-3'>
				<EditTitle />
				<EditHourlyRate />
			</Flex>
			<EditProfileOverview />
		</Flex>
	);
}
