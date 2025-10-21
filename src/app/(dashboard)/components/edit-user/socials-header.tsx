import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";

export default function SocialsHeader({ children }: { children?: ReactNode }) {
	return (
		<a href='#socials' className='shrink-0'>
			<Flex className='h-fit items-center justify-between'>
				<p className='font-semibold lg:text-2xl'>Socials</p>
				{children}
			</Flex>
		</a>
	);
}
