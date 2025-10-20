import Flex from "@/components/layouts/flex";
import { useEditDisplayPicture } from "@/hooks/interface/dashboard/use-edit-display-picture.interface";
import Image from "next/image";

export default function EditDisplayPicture() {
	const { image, edit, Modal } = useEditDisplayPicture();

	return (
		<Flex
			flex='column'
			className='relative overflow-visible z-10 mx-auto lg:mx-0'
		>
			<Flex
				className='rounded-full shrink-0 p-0 h-24 w-24 cursor-pointer active:scale-[.99] overflow-clip'
				onClick={edit}
			>
				{Boolean(image) && (
					<Image
						src={image || "/stud.jpg"}
						width={1000}
						height={1000}
						alt='donald'
						className='object-cover'
					/>
				)}
			</Flex>

			{Modal}
		</Flex>
	);
}
