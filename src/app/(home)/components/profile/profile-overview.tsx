"use client";
import Flex from "@/components/layouts/flex";
import md from "md";
import parse from "html-react-parser";
import { profile_snapshot_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
export default function ProfileOverview() {
	const profile_snapshot = useAtomValue(profile_snapshot_jotai);
	return (
		<>
			<Flex className='gap-3'>
				<Flex className='grow h-[320px]'>
					<div className='shrink-0 w-full'>
						{parse(md(profile_snapshot.overview))}
					</div>
				</Flex>
			</Flex>
		</>
	);
}
