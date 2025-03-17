import { getUsersController } from "@/backend/controllers/user/get-users.controller";
import Flex from "@/components/layouts/flex";
import Link from "next/link";
import React from "react";

export default async function HomePage() {
	const users = await getUsersController();
	return (
		<Flex>
			{users.users.map((user) => (
				<Link href={`/${user.id}`} key={user.id}>
					{user.name}
				</Link>
			))}
		</Flex>
	);
}
