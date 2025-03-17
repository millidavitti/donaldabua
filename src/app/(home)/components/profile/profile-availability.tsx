import Flex from "@/components/layouts/flex";
import { profile_snapshot_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtomValue } from "jotai";

export default function ProfileAvailability() {
	const profile_snapshot = useAtomValue(profile_snapshot_jotai);
	return (
		<>
			<Flex flex='column' className='gap-3' htmlProps={{ id: "availability" }}>
				<a href='#availability'>
					<Flex className='h-fit items-center justify-between'>
						<p className='font-semibold lg:text-2xl'>Availability</p>
					</Flex>
				</a>
				<Flex>
					<p className='lg:text-xl text-sm'>{profile_snapshot.availability}</p>
				</Flex>
			</Flex>
		</>
	);
}
