import Flex from "@/components/layouts/flex";
import { useEditLocation } from "@/hooks/interface/dashboard/use-edit-location.interface";
import { MapPin } from "lucide-react";

export default function EditLocation() {
	const { start, location, Modal } = useEditLocation();
	return (
		<Flex className='gap-3'>
			<MapPin />
			<p onClick={start} className='cursor-pointer font-medium'>
				{location?.city}, {location?.country}
			</p>

			{Modal}
		</Flex>
	);
}
