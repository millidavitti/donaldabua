"use client";
import Flex from "@/components/layouts/flex";
import ProfileTitle from "./profile-title";
import ProfileHourlyRate from "./profile-hourly-rate";
import ProfileOverview from "./profile-overview";

export default function ProfileSummary() {
	return (
		<Flex flex='column' className='p-0 gap-3 border-0'>
			<Flex className='shrink-0 justify-between flex-wrap gap-3 outline-0'>
				<ProfileTitle />
				<ProfileHourlyRate />
			</Flex>
			<ProfileOverview />
		</Flex>
	);
}
