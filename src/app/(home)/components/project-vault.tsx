"use client";
import Flex from "@/components/layouts/flex";
import VaultHeader from "./vault-header";
import User from "./user/user";
import Sidebar from "./sidebar";
import ProfileProjects from "./profile/profile-projects";
import ProfileTechnologies from "./profile/profile-technologies";
import SelectUser from "./select-user";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
// import { user_snapshot_jotai } from "@/data/home/home-atoms/home-data";

export default function ProjectVault() {
	return (
		<>
			{false && (
				<Flex
					className={cn("w-full h-full gap-3", getAnimationClass("neonScan"))}
					flex='column'
				>
					<VaultHeader />
					<Flex className='h-full gap-3 p-0 border-0' flex='column'>
						<User />
						{/* Main */}
						<Flex className='flex-wrap gap-3 p-0 border-0 grow shrink-0 h-fit'>
							<Sidebar />
							<Flex
								className='basis-[720px] grow-[2] border-0 p-0 gap-3'
								flex='column'
							>
								<ProfileProjects />
								<ProfileTechnologies />
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
			{false || <SelectUser />}
		</>
	);
}
