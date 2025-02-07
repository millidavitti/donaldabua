import Flex from "@/components/layouts/flex";
import Image from "next/image";
import React from "react";

interface PortfolioProject {
	thumbnail: string;
	title: string;
}
export default function PortfolioProject({
	thumbnail,
	title,
}: PortfolioProject) {
	return (
		<Flex
			flex='column'
			className='shrink-0 gap-3 h-fit grow basis-52 cursor-pointer active:scale-[.98] transition'
		>
			<Flex className='w-full h-40 shrink-0'>
				<Image
					src={thumbnail}
					width={1000}
					height={1000}
					alt='portfolio-project-thumbnail'
					className='neonScan object-cover'
				/>
			</Flex>
			<p className='text-lg font-semibold'>{title}</p>
		</Flex>
	);
}
