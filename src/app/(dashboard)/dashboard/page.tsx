"use client";
import Flex from "@/components/layouts/flex";
import UserHeader from "../components/profile/header";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import AlertDialog from "@/components/ui/alert-dialog";
import ProjectDraft from "../components/profile/project-draft";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { EditIcon } from "lucide-react";
import HourlyRate from "../components/profile/hourly-rate";
import Overview from "../components/profile/overview";
import ProfileTitle from "../components/profile/title";

export default function Dashboard() {
	return (
		<Flex className='w-full h-full gap-3' flex='column'>
			<Header />
			<Flex className='border-0 p-0 h-full gap-3' flex='column'>
				<UserHeader />
				{/* Main */}
				<Flex className='grow gap-3 shrink-0 flex-wrap h-fit border-0 p-0'>
					<Sidebar />
					<Flex
						className='basis-[720px] grow-[2] gap-3 border-0 p-0'
						flex='column'
					>
						<Flex flex='column' className='gap-3 border-0 p-0'>
							<Flex className='shrink-0 justify-between flex-wrap lg:flex-nowrap gap-3 p-0 border-none'>
								<ProfileTitle>
									{(start) => (
										<InteractiveIcon onClick={start}>
											<EditIcon size={24} />
										</InteractiveIcon>
									)}
								</ProfileTitle>
								<HourlyRate>
									{(start) => (
										<InteractiveIcon onClick={start}>
											<EditIcon size={24} />
										</InteractiveIcon>
									)}
								</HourlyRate>
							</Flex>
							<Overview>
								{(start) => (
									<InteractiveIcon onClick={start} className='self-start'>
										<EditIcon size={24} />
									</InteractiveIcon>
								)}
							</Overview>
						</Flex>
						<ProjectDraft />
						{/* <EditProfileTechnologies /> */}
					</Flex>
				</Flex>
			</Flex>
			<AlertDialog />
		</Flex>
	);
}
