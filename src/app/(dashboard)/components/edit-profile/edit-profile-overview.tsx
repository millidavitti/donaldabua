import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { EditIcon } from "lucide-react";
import md from "md";
import parse from "html-react-parser";
import { useEditProfileOverview } from "@/hooks/interface/dashboard/use-edit-profile-overview.interface";
export default function EditProfileOverview() {
	const { start, overview, Modal } = useEditProfileOverview();
	return (
		<>
			{Modal}
			<Flex className='gap-3 border-0 p-0'>
				<Flex className='grow h-[320px]'>
					<div className='shrink-0 w-full'>{parse(md(overview))}</div>
				</Flex>
				<InteractiveIcon callback={start} className='self-start'>
					<EditIcon size={24} />
				</InteractiveIcon>
			</Flex>
		</>
	);
}
