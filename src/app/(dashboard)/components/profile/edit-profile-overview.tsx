"use client";
import Flex from "@/components/layouts/flex";
import md from "md";
import parse from "html-react-parser";
import { ReactNode } from "react";
import { useOverview } from "./interfaces/use-profile-overview.interface";
export default function Overview({
	children,
}: {
	children?: (start: () => void) => ReactNode;
}) {
	const { start, overview, Modal } = useOverview();
	return (
		<>
			{Modal}
			<Flex className='gap-3 border-0 p-0'>
				<Flex className='grow h-[320px]'>
					<div className='shrink-0 w-full'>{parse(md(overview))}</div>
				</Flex>
				{children && children(start)}
			</Flex>
		</>
	);
}
