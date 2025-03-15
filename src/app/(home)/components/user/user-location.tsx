import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { user_location_snapshot_jotai } from "@/data/atoms/app_data";
import { useEditUserLocationInterface } from "@/hooks/interface/use-edit-user-location-interface";
import { useAtomValue } from "jotai";
import { MapPin, X } from "lucide-react";

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
