"use client";
import Flex from "@/components/layouts/flex";
import { useSetAtom } from "jotai";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import { user_snapshot_jotai } from "@/data/home/home-atoms/home-data";
import VaultHeader from "../components/vault-header";
import User from "../components/user/user";
import Sidebar from "../components/sidebar";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getUserController } from "@/backend/controllers/home/user/get-user.controller";
import Projects from "@/app/(dashboard)/components/project/projects";
import HourlyRate from "@/app/(dashboard)/components/edit-profile/edit-profile-hourly-rate";
import Overview from "@/app/(dashboard)/components/edit-profile/edit-profile-overview";
import ProfileTitle from "@/app/(dashboard)/components/edit-profile/edit-profile-title";

export default function ProjectVault() {
	const user_snapshot_setter = useSetAtom(user_snapshot_jotai);
	const params = useParams();

	useEffect(() => {
		if (params.userId)
			getUserController().then(({ error, user }) => {
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
							<Flex flex='column' className='p-0 gap-3 border-0'>
								<Flex className='shrink-0 justify-between flex-wrap md:flex-nowrap gap-3 outline-0'>
									<ProfileTitle />
									<HourlyRate />
								</Flex>
								<Overview />
							</Flex>
							<Flex flex='column' className='border-0 p-0 gap-3'>
								<a href='#projects'>
									{/* Header */}
									<Flex className='items-center justify-between shrink-0'>
										<p className='font-semibold lg:text-2xl'>Projects</p>
									</Flex>
								</a>
								<Projects />
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
