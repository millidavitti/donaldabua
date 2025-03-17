import Flex from "@/components/layouts/flex";
import { Metadata } from "next";
import VaultHeader from "../components/vault-header";
import User from "../components/user/user";
import Sidebar from "../components/sidebar";
import ProfileSummary from "../components/profile/profile-summary";
import ProfileProjects from "../components/profile/profile-projects";
import ProfileTechnologies from "../components/profile/profile-technologies";

export const metadata: Metadata = {
	title: "Donald Abua",
};

export default function ProjectVault() {
	return (
		<Flex className='w-full h-full gap-3' flex='column'>
			<VaultHeader />
			<Flex className='outline h-full gap-3' flex='column'>
				<User />
				{/* Main */}
				<Flex className='grow gap-3 shrink-0 flex-wrap h-fit'>
					<Sidebar />
					<Flex className='basis-[720px] grow-[2] gap-3' flex='column'>
						<ProfileSummary />
						<ProfileProjects />
						<ProfileTechnologies />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
