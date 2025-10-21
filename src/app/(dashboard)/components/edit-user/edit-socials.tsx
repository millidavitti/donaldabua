"use client";
import Flex from "@/components/layouts/flex";
import useSocials from "@/hooks/interface/dashboard/use-edit-socials.interface";
import { PackageOpen } from "lucide-react";
import { HashLoader } from "react-spinners";
import { ReactNode } from "react";
import { type Social } from "@/data/dashboard/dashboard-atoms/types";

interface Socials {
	children: (
		socials: Social[],
		start: (ctx: "create" | "update", social?: Social | undefined) => void,
		remove: (social: Social) => Promise<void>,
	) => ReactNode;
}
export default function Socials({ children }: Socials) {
	const { socials, remove, start, Modal, isFetching } = useSocials();

	return (
		<>
			{Modal}
			<Flex flex='column' className='grow gap-3'>
				{children(socials, start, remove)}
				{!Boolean(socials?.length) && !isFetching && (
					<Flex flex='column' className='mb-auto border-none items-center'>
						<PackageOpen size={32} />
						<p className='font-medium'>You have no socials</p>
					</Flex>
				)}
				{isFetching && (
					<Flex flex='column' className='m-auto border-none items-center'>
						<HashLoader size={24} />
					</Flex>
				)}
			</Flex>
		</>
	);
}
