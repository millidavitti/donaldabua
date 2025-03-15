import Flex from "@/components/layouts/flex";
import UserHeader from "../components/profile-header";
import Sidebar from "../components/sidebar";
import ProfileOverview from "../components/profile-overview";
import DashboardHeader from "../components/dashboard-header";
import AlertDialog from "@/components/ui/alert-dialog";

export default function Dashboard() {
	return (
		<Flex className='w-full h-full gap-3' flex='column'>
			<DashboardHeader />
			<Flex className='outline h-full gap-3' flex='column'>
				<UserHeader />
				{/* Main */}
				<Flex className='grow gap-3 shrink-0 flex-wrap h-fit'>
					<Sidebar />
					<ProfileOverview />
				</Flex>
			</Flex>
			<AlertDialog />
		</Flex>
	);
}
