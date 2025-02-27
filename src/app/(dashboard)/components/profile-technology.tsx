import Flex from "@/components/layouts/flex";
import { Technology } from "@/data/atoms/app_data";
import { ReactNode } from "react";

export default function ProfileTechnology({
	children,
	tech,
}: {
	children?: ReactNode;
	tech: Technology;
}) {
	return (
		<Flex className='gap-3 items-center'>
			<p className='shrink-0 font-medium'>{tech.name}</p>
			{children}
		</Flex>
	);
}
