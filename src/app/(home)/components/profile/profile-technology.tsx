import Flex from "@/components/layouts/flex";
import { Technology } from "@/data/home/home-atoms/home-data";
import { DELAY } from "@/data/dashboard/dashboard-constants";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function ProfileTechnology({
	children,
	tech,
	index,
}: {
	children?: ReactNode;
	tech: Technology;
	index: number;
}) {
	return (
		<Flex
			className={cn(
				"gap-3 items-center self-start",
				getAnimationClass("swing-in-top-fwd"),
			)}
			htmlProps={{ style: { animationDelay: index * DELAY + "ms" } }}
		>
			<p className='shrink-0 font-medium'>{tech.name}</p>
			{children}
		</Flex>
	);
}
