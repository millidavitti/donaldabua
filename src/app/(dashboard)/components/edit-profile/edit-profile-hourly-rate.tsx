"use client";
import Flex from "@/components/layouts/flex";
import { useHourlyRate } from "@/hooks/interface/dashboard/use-edit-hourly-rate.interface";
import { ReactNode } from "react";

export default function HourlyRate({
	children,
}: {
	children?: (start: () => void) => ReactNode;
}) {
	const { start, hourlyRate, Modal } = useHourlyRate();
	return (
		<>
			{Modal}
			<Flex className='h-fit items-center justify-between shrink-0 ml-auto'>
				<p className='font-semibold lg:text-2xl'>${hourlyRate}/hr</p>
				{children && children(start)}
			</Flex>
		</>
	);
}
