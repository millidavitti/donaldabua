import Flex from "@/components/layouts/flex";
import { user_snapshot_jotai } from "@/data/home/home-atoms/home-data";
import { useAtomValue } from "jotai";

export default function UserVideo() {
	const user_snapshot = useAtomValue(user_snapshot_jotai);

	return (
		<Flex flex='column' className='h-[258px]'>
			<Flex className='h-fit items-center justify-between shrink-0'>
				<p className='font-semibold lg:text-2xl'>Introduction</p>
			</Flex>

			{Boolean(user_snapshot.video) && (
				<iframe
					src={user_snapshot.video!}
					data-is-visible={Boolean(user_snapshot.video)}
					className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline'
					loading='lazy'
				/>
			)}
		</Flex>
	);
}
