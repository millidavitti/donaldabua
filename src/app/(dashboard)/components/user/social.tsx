import { type Social } from "@/data/dashboard/dashboard-atoms/types";
import { SOCIAL_PLATFORM_ICONS } from "@/data/home/home-constants";
import Image from "next/image";

export function Social({
	social,
	...props
}: {
	social?: Social;
	slot: string;
}) {
	return (
		<span
			{...props}
			className='flex w-full gap-3 transition cursor-pointer active:scale-95'
		>
			<Image
				src={SOCIAL_PLATFORM_ICONS[social?.platform || "Discord"]}
				width={24}
				height={24}
				alt={social?.platform || ""}
			/>
			{social?.platform}
		</span>
	);
}
