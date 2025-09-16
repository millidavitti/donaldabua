import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { useEditHourlyRate } from "@/hooks/interface/dashboard/use-edit-hourly-rate.interface";
import { EditIcon } from "lucide-react";

export default function EditProfileHourlyRate() {
	const { start, hourlyRate, Modal } = useEditHourlyRate();
	return (
		<>
			{Modal}
			<Flex className='h-fit items-center justify-between shrink-0 ml-auto'>
				<p className='font-semibold lg:text-2xl'>${hourlyRate}/hr</p>
				<InteractiveIcon callback={start}>
					<EditIcon size={24} />
				</InteractiveIcon>
			</Flex>
		</>
	);
}
