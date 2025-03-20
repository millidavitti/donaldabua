"use client";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { users_snapshot_jotai } from "@/data/home/home-atoms/home-data";
import { useAtomValue } from "jotai";
import Link from "next/link";

export default function SelectUser() {
	const users_snapshot = useAtomValue(users_snapshot_jotai);

	return (
		<Flex
			flex='column'
			className='gap-3 w-full h-full justify-center items-center shrink-0'
		>
			<h2 className='font-semibold text-3xl'>
				Welcome, select a profile to get started
			</h2>
			{users_snapshot.map((user) => (
				<Link href={user.id} key={user.id}>
					<Button type='button'>{user.name}</Button>
				</Link>
			))}
		</Flex>
	);
}
