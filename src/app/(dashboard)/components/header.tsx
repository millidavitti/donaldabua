import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";
import Image from "next/image";

export default function Header({ children }: { children?: ReactNode }) {
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
			<h1 className='mr-auto font-bold text-center md:text-2xl'>Portfolio</h1>
			{children}
		</Flex>
	);
}
