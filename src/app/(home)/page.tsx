import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Ronin Ubermensch",
};
export default function Home() {
	return (
		<Flex flex='column' className='gap-3 my-auto items-center'>
			<Link href='/auth/sign-up'>
				<Flex className='items-center active:scale-95 transition'>
					<Image
						src='/ronin-64.png'
						width={64}
						height={64}
						alt='Ronin Ubermensch'
					/>

					<h1 className='font-bold text-4xl'>Ronin Ubermensch</h1>
				</Flex>
			</Link>
			<p className='text-lg italic text-center'>
				Welcome. Strength is the only passport here. Shed the softness you
				carried in, sharpen your will, and stand upright among those who do not
				flinch. You are not asked to be comfortable. You are demanded to be
				forged. The world does not negotiate with hesitation. It either bends
				beneath your conviction or buries you beneath its weight. If you walk
				forward, do it with teeth, not hope. If you rise, rise as someone no
				collapse can erase. Here, no one waits for permission to become more
				than they were yesterday. Here, ascent is not therapy. It is duty.
			</p>
			<Link href='/auth/sign-up'>
				<Button type='submit'>Begin Your Ascent</Button>
			</Link>
		</Flex>
	);
}
