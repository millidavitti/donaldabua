import Flex from "@/components/layouts/flex";
import { profile_snapshot_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";

export default function ProfileHourlyRate() {
	const profile_snapshot = useAtomValue(profile_snapshot_jotai);
	return (
		<>
			<Flex className='h-fit items-center justify-between grow'>
				<p className='font-semibold lg:text-2xl'>
					${profile_snapshot.hourlyRate}/hr
				</p>
			</Flex>
		</>
	);
}
