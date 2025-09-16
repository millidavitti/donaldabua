import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { useEditProfileTitle } from "@/hooks/interface/dashboard/use-edit-profile-title.interface";
import { EditIcon } from "lucide-react";

export default function EditProfileTitle() {
	const { start, title, Modal } = useEditProfileTitle();
	return (
		<>
			{Modal}
			<Flex className='h-fit items-center justify-between w-full'>
				<p className='font-semibold lg:text-2xl'>{title}</p>
				<InteractiveIcon callback={start}>
					<EditIcon size={24} />
				</InteractiveIcon>
			</Flex>
		</>
	);
}
