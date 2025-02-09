import Flex from "@/components/layouts/flex";
import React from "react";
import ProfileHeader from "../components/profile-header";
import Sidebar from "../components/sidebar";
import ProfileOverview from "../components/profile-overview";
import Socials from "../components/edit-profile-user/edit-profile-user-socials";
import EditProfileEmploymentHistory from "../components/edit-profile/edit-profile-employment-history";

export default function Dashboard() {
	return (
		<Flex className='w-full h-full gap-3' flex='column'>
			<h1 className='text-3xl font-bold text-center'>Profile Dashboard</h1>
			<Flex className='outline h-full gap-3' flex='column'>
				<ProfileHeader />
				{/* Main */}
				<Flex className='grow gap-3 shrink-0 flex-wrap h-fit'>
					<Sidebar />
					<ProfileOverview />
				</Flex>
				{/* Social Proof */}
				<Flex className='gap-3 shrink-0' flex='column'>
					<EditProfileEmploymentHistory />
					<Socials />
				</Flex>
			</Flex>
		</Flex>
	);
}
