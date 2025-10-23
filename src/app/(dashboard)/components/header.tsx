import Flex from "@/components/layouts/flex";
import React from "react";
import Settings from "./settings/settings";
import Image from "next/image";

export default function Header() {
	return (
		<Flex className='items-center justify-between p-0 border-0 shrink-0'>
			<a href='/' target='_blank' rel='noopener noreferrer'>
				<Image
					src='/logo.svg'
					width={48}
					height={48}
					className='w-6 h-6 md:w-12 md:h-12'
					alt='logo'
				/>
			</a>
			<h1 className='font-bold text-center md:text-2xl'>Portfolio Dashboard</h1>
			<Settings />
		</Flex>
	);
}
