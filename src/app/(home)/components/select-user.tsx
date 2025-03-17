"use client";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import {
	user_snapshot_jotai,
	users_snapshot_jotai,
} from "@/data/home/home-atoms/home-data";
import { useAtomValue, useSetAtom } from "jotai";

export default function SelectUser() {
	const user_snapshot_setter = useSetAtom(user_snapshot_jotai);
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
				<Button
					type='button'
					key={user.id}
					onClick={() => user_snapshot_setter(user)}
				>
					{user.name}
				</Button>
			))}
		</Flex>
	);
}
