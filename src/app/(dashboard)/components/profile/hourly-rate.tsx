"use client";
import Flex from "@/components/layouts/flex";
import { ReactNode } from "react";
import { useHourlyRate } from "../user/interfaces/use-hourly-rate.interface";

export default function HourlyRate({
	children,
}: {
	children?: (start: () => void) => ReactNode;
}) {
	const { start, hourlyRate, Modal } = useHourlyRate();
	return (
		<>
			{Modal}
			<Flex className='items-center justify-between ml-auto h-fit shrink-0'>
				<p className='font-semibold lg:text-2xl'>${hourlyRate}/hr</p>
				{children && children(start)}
			</Flex>
		</>
	);
}
