import React from "react";
import Flex from "./layouts/flex";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href='/sign-in'>
			<Flex className='items-center shrink-0 gap-1' flex='row'>
				<Image
					src='/context_logo.svg'
					width={48}
					height={48}
					alt='Context Logo'
				/>
				<h1 className='text-3xl font-semibold'>Context</h1>
				<span className='font-semibold text-xs'>BETA</span>
			</Flex>
		</Link>
	);
}
