import Flex from "@/components/layouts/flex";
import { type Location } from "@/data/types";
import { MapPin } from "lucide-react";
import { ReactNode } from "react";
import { useLocation } from "./interfaces/use-location.interface";

export default function Location({
	children,
}: {
	children: (location: Location | undefined, start?: () => void) => ReactNode;
}) {
	const { start, location, Modal } = useLocation();
	return (
		<>
			{Modal}
			<Flex className='gap-3'>
				<MapPin />
				{children(location, start)}
			</Flex>
		</>
	);
}
