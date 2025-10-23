"use client";
import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";
import { useProfileTitle } from "./interfaces/use-profile-title.interface";

export default function ProfileTitle({
	children,
}: {
	children?: (start: () => void) => ReactNode;
}) {
	const { start, title, Modal } = useProfileTitle();
	return (
		<>
			{Modal}
			<Flex className='h-fit items-center justify-between w-full'>
				<p className='font-semibold lg:text-2xl'>{title}</p>
				{children && children(start)}
			</Flex>
		</>
	);
}
