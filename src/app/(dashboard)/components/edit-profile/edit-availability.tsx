import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { useEditAvailability } from "@/hooks/interface/dashboard/use-edit-availability.interface";
import { EditIcon } from "lucide-react";

export default function EditAvailability() {
	const { availability, Modal, start } = useEditAvailability();
	return (
		<>
			{Modal}
			<Flex flex='column' className='gap-3' htmlProps={{ id: "availability" }}>
				<a href='#availability'>
					<Flex className='h-fit items-center justify-between'>
						<p className='font-semibold lg:text-2xl'>Availability</p>
						<InteractiveIcon callback={start}>
							<EditIcon size={24} />
						</InteractiveIcon>
					</Flex>
				</a>
				<Flex>
					<p className='lg:text-xl text-sm'>{availability}</p>
				</Flex>
			</Flex>
		</>
	);
}
