import Flex from "@/components/layouts/flex";
import { user_location_snapshot_jotai } from "@/data/home/home-atoms/home-data.ts";
import { useAtomValue } from "jotai";
import { MapPin } from "lucide-react";

export default function UserLocation() {
	const user_location_snapshot = useAtomValue(user_location_snapshot_jotai);
	return (
		<Flex className='gap-3'>
			<MapPin />
			<p className='cursor-pointer font-medium'>
				{user_location_snapshot.city}, {user_location_snapshot.country}
			</p>
		</Flex>
	);
}
