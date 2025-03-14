import Flex from "@/components/layouts/flex";
import React from "react";
import Settings from "./settings/settings";
import Image from "next/image";

export default function DashboardHeader() {
	return (
		<Flex className='justify-between'>
			<Image
				src='/logo.svg'
				width={48}
				height={48}
				className='w-6 h-6 md:w-12 md:h-12'
				alt='logo'
			/>
			<h1 className='md:text-2xl font-bold text-center'>Portfolio Dashboard</h1>
			<Settings />
		</Flex>
	);
}
