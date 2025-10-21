import Flex from "@/components/layouts/flex";
import { useEditDisplayPicture as useDisplayPicture } from "@/hooks/interface/dashboard/use-edit-display-picture.interface";
import { ReactNode } from "react";

export default function DisplayPicture({
	children,
}: {
	children: (image: string | undefined, edit?: () => void) => ReactNode;
}) {
	const { image, edit, Modal } = useDisplayPicture();

	return (
		<Flex
			flex='column'
			className='relative overflow-visible z-10 mx-auto lg:mx-0'
		>
			{Modal}
			{children(image, edit)}
		</Flex>
	);
}
