import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { payload_view_atom } from "@/data/data";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Header({ children }: { children?: ReactNode }) {
	const payload = useAtomValue(payload_view_atom);
	const { userId } = useParams();

	return (
		<Flex className='items-center justify-between p-0 border-0 shrink-0'>
			<Link
				href={"/share/" + (userId || payload.data?.user.id)}
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
					src='/ronin.png'
					width={48}
					height={48}
					className='w-6 h-6 md:w-12 md:h-12'
					alt='Ronin Ubermensch'
				/>
			</Link>
			<h1 className='mr-auto font-bold text-center md:text-2xl'>
				Ronin Ubermensch
			</h1>
			{children}
		</Flex>
	);
}
