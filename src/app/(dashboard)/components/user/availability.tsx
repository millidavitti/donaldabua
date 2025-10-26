import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";
import { useAvailability } from "./interfaces/use-availability.interface";

interface Availability {
	children?: (start: () => void) => ReactNode;
}

export default function Availability({ children }: Availability) {
	const { availability, Modal, start } = useAvailability();
	return (
		<>
			{Modal}
			<Flex flex='column' className='gap-3'>
				<a href='#availability'>
					<Flex className='items-center justify-between h-fit'>
						<p className='font-semibold lg:text-2xl'>Availability</p>
						{children && children(start)}
					</Flex>
				</a>
				<Flex>
					<p className='text-sm lg:text-xl'>{availability}</p>
				</Flex>
			</Flex>
		</>
	);
}
