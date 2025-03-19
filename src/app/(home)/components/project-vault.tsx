"use client";
import Flex from "@/components/layouts/flex";
import VaultHeader from "./vault-header";
import User from "./user/user";
import Sidebar from "./sidebar";
import ProfileSummary from "./profile/profile-summary";
import ProfileProjects from "./profile/profile-projects";
import ProfileTechnologies from "./profile/profile-technologies";
import SelectUser from "./select-user";
import { useAtomValue } from "jotai";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import { user_snapshot_jotai } from "@/data/home/home-atoms/home-data";

export default function ProjectVault() {
	const user_snapshot = useAtomValue(user_snapshot_jotai);
	return (
		<>
			{Boolean(user_snapshot.id) && (
				<Flex
					className={cn("w-full h-full gap-3", getAnimationClass("neonScan"))}
					flex='column'
				>
					<VaultHeader />
					<Flex className='h-full gap-3 p-0 border-0' flex='column'>
						<User />
						{/* Main */}
						<Flex className='grow shrink-0 gap-3 flex-wrap h-fit p-0 border-0'>
							<Sidebar />
							<Flex
								className='basis-[720px] grow-[2] border-0 p-0 gap-3'
								flex='column'
							>
								<ProfileSummary />
								<ProfileProjects />
								<ProfileTechnologies />
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
			{Boolean(user_snapshot.id) || <SelectUser />}
		</>
	);
}
