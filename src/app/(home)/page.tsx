"use client";
import Flex from "@/components/layouts/flex";
import VaultHeader from "./components/vault-header";
import User from "./components/user/user";
import Sidebar from "./components/sidebar";
import ProfileSummary from "./components/profile/profile-summary";
import ProfileProjects from "./components/profile/profile-projects";
import ProfileTechnologies from "./components/profile/profile-technologies";
import SelectUser from "./components/select-user";
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
			)}
			<SelectUser />
		</>
	);
}
