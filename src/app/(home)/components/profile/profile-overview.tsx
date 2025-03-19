"use client";
import Flex from "@/components/layouts/flex";
import md from "md";
import parse from "html-react-parser";
import { profile_snapshot_jotai } from "@/data/home/home-atoms/home-data";
import { useAtomValue } from "jotai";
export default function ProfileOverview() {
	const profile_snapshot = useAtomValue(profile_snapshot_jotai);
	return (
		<Flex className='grow h-[320px] outline-0'>
			<div className='shrink-0 w-full'>
				{parse(md(profile_snapshot.overview || ""))}
			</div>
		</Flex>
	);
}
