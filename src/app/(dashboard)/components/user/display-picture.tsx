import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";
import { useDisplayPicture } from "./interfaces/use-display-picture.interface";

export default function DisplayPicture({
	children,
}: {
	children: (image: string | undefined, edit?: () => void) => ReactNode;
}) {
	const { image, edit, Modal } = useDisplayPicture();

	return (
		<Flex
			flex='column'
			className='relative overflow-visible z-20 mx-auto lg:mx-0'
		>
			{Modal}
			{children(image, edit)}
		</Flex>
	);
}
