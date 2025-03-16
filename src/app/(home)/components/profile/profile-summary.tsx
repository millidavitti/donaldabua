"use client";
import Flex from "@/components/layouts/flex";
import ProfileTitle from "./profile-title";
import ProfileHourlyRate from "./profile-hourly-rate";
import ProfileOverview from "./profile-overview";

export default function ProfileSummary() {
	return (
		<Flex flex='column' className='gap-3'>
			<Flex className='shrink-0 justify-between flex-wrap gap-3'>
				<ProfileTitle />
				<ProfileHourlyRate />
			</Flex>
			<ProfileOverview />
		</Flex>
	);
}
