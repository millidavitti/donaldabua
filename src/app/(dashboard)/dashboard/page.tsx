import Flex from "@/components/layouts/flex";
import React from "react";
import ProfileHeader from "../components/profile-header";
import Sidebar from "../components/sidebar";
import DeveloperOverview from "../components/developer-overview";
import Testimonials from "../components/testimonials";
import EmploymentHistory from "../components/employment-history";
import Socials from "../components/socials";

export default function Dashboard() {
	return (
		<Flex className='w-full h-full gap-3' flex='column'>
			<h1 className='text-3xl font-bold text-center'>Profile Dashboard</h1>
			<Flex className='outline h-full gap-3' flex='column'>
				<ProfileHeader />
				{/* Main */}
				<Flex className='grow gap-3 shrink-0 flex-wrap h-fit'>
					<Sidebar />
					<DeveloperOverview />
				</Flex>
				{/* Social Proof */}
				<Flex className='h-full gap-3 shrink-0' flex='column'>
					<Testimonials />
					<EmploymentHistory />
					<Socials />
				</Flex>
			</Flex>
		</Flex>
	);
}
