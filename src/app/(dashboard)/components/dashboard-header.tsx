import Flex from "@/components/layouts/flex";
import React from "react";
import Settings from "./settings/settings";

export default function DashboardHeader() {
	return (
		<Flex className='justify-between'>
			<h1 className='text-3xl font-bold text-center'>Profile Dashboard</h1>
			<Settings />
		</Flex>
	);
}
