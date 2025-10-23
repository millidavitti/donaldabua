"use client";
import Flex from "@/components/layouts/flex";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import AlertDialog from "@/components/ui/alert-dialog";
import Portfolio from "../components/profile/portfolio";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { EditIcon } from "lucide-react";
import HourlyRate from "../components/profile/hourly-rate";
import Overview from "../components/profile/overview";
import ProfileTitle from "../components/profile/title";
import UserInfo from "../components/profile/user-info";
import ProjectDelete from "../components/project/options/project-delete";
import ProjectEdit from "../components/project/options/project-edit";
import ProjectOptions from "../components/project/project-options";
import Projects from "../components/project/projects";

export default function Dashboard() {
	return (
		<Flex className='w-full h-full gap-3' flex='column'>
			<Header />
			<Flex className='h-full gap-3 p-0 border-0' flex='column'>
				<UserInfo />
				{/* Main */}
				<Flex className='flex-wrap gap-3 p-0 border-0 grow shrink-0 h-fit'>
					<Sidebar />
					<Flex
						className='basis-[720px] grow-[2] gap-3 border-0 p-0'
						flex='column'
					>
						<Flex flex='column' className='gap-3 p-0 border-0'>
							<Flex className='flex-wrap justify-between gap-3 p-0 border-none shrink-0 lg:flex-nowrap'>
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
						<Portfolio>
							<Projects>
								{(project) => (
									<ProjectOptions>
										<ProjectEdit project={project} />
										<ProjectDelete projectID={project.id} />
									</ProjectOptions>
								)}
							</Projects>
						</Portfolio>
						{/* <EditProfileTechnologies /> */}
					</Flex>
				</Flex>
			</Flex>
			<AlertDialog />
		</Flex>
	);
}
