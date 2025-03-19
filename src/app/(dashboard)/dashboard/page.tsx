import Flex from "@/components/layouts/flex";
import UserHeader from "../components/profile-header";
import Sidebar from "../components/sidebar";
import DashboardHeader from "../components/dashboard-header";
import AlertDialog from "@/components/ui/alert-dialog";
import EditProfileSummary from "../components/edit-profile/edit-profile-summary";
import EditProfileProjects from "../components/edit-profile/edit-profile-projects";
import EditProfileTechnologies from "../components/edit-profile/edit-profile-technologies";

export default function Dashboard() {
	return (
		<Flex className='w-full h-full gap-3' flex='column'>
			<DashboardHeader />
			<Flex className='border-0 p-0 h-full gap-3' flex='column'>
				<UserHeader />
				{/* Main */}
				<Flex className='grow gap-3 shrink-0 flex-wrap h-fit border-0 p-0'>
					<Sidebar />
					<Flex
						className='basis-[720px] grow-[2] gap-3 border-0 p-0'
						flex='column'
					>
						<EditProfileSummary />
						<EditProfileProjects />
						<EditProfileTechnologies />
					</Flex>
				</Flex>
			</Flex>
			<AlertDialog />
		</Flex>
	);
}
