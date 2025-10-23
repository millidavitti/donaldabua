import Flex from "@/components/layouts/flex";
import { useAvailability } from "@/hooks/interface/dashboard/use-edit-availability.interface";
import { ReactNode } from "react";

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
					<Flex className='h-fit items-center justify-between'>
						<p className='font-semibold lg:text-2xl'>Availability</p>
						{children && children(start)}
					</Flex>
				</a>
				<Flex>
					<p className='lg:text-xl text-sm'>{availability}</p>
				</Flex>
			</Flex>
		</>
	);
}
