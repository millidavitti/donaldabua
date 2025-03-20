"use client";
import Flex from "@/components/layouts/flex";
import { useSetAtom } from "jotai";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import { user_snapshot_jotai } from "@/data/home/home-atoms/home-data";
import VaultHeader from "../components/vault-header";
import User from "../components/user/user";
import Sidebar from "../components/sidebar";
import ProfileSummary from "../components/profile/profile-summary";
import ProfileProjects from "../components/profile/profile-projects";
import ProfileTechnologies from "../components/profile/profile-technologies";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getUserController } from "@/backend/controllers/home/user/get-user.controller";

export default function ProjectVault() {
	const user_snapshot_setter = useSetAtom(user_snapshot_jotai);
	const params = useParams();

	useEffect(() => {
		if (params.userId)
			getUserController(params.userId as string).then(({ error, user }) => {
				if (error) throw new Error(error);
				user_snapshot_setter(user);
			});
	}, [params.userId]);
	return (
		<>
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
		</>
	);
}
