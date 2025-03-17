import Flex from "@/components/layouts/flex";
import { user_image_jotai } from "@/data/home/home-atoms/home-data.ts";
import { useAtomValue } from "jotai";
import Image from "next/image";

export default function UserPhoto() {
	const user_image = useAtomValue(user_image_jotai);

	return (
		<Flex
			flex='column'
			className='relative overflow-visible z-10 mx-auto lg:mx-0'
		>
			<Flex className='rounded-full shrink-0 p-0 h-24 w-24 cursor-pointer active:scale-[.99] overflow-clip'>
				{Boolean(user_image) && (
					<Image
						src={user_image}
						width={1000}
						height={1000}
						alt='donald'
						className='object-cover'
					/>
				)}
			</Flex>
		</Flex>
	);
}
