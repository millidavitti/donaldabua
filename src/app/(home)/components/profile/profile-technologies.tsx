"use client";
import Flex from "@/components/layouts/flex";
import ProfileTechnology from "./profile-technology";
import { profile_technologies_snapshot_jotai } from "@/data/home/home-atoms/home-data.ts";
import { useAtomValue } from "jotai";

export default function ProfileTechnologies() {
	const profile_technologies_snapshot = useAtomValue(
		profile_technologies_snapshot_jotai,
	);
	return (
		<>
			<Flex flex='column' className='grow gap-3 shrink-0 max-h-[480px]'>
				{/* Header */}
				<Flex className='justify-between items-center shrink-0'>
					<h2 className='lg:text-2xl font-semibold'>Profile Technologies</h2>
				</Flex>
				{/* Stack */}

				{Boolean(profile_technologies_snapshot.length) && (
					<Flex className='gap-3 flex-wrap shrink-0'>
						{profile_technologies_snapshot.map((technology, i) => (
							<ProfileTechnology
								tech={technology}
								key={technology.id}
								index={i}
							/>
						))}
					</Flex>
				)}
			</Flex>
		</>
	);
}
