import Flex from "@/components/layouts/flex";
import { type Social } from "@/data/dashboard/dashboard-atoms/types";
import { SOCIAL_PLATFORM_ICONS } from "@/data/home/home-constants";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { Trash2 } from "lucide-react";
import Image from "next/image";

interface ISocial {
	social: Social;
	start?: (ctx: "create" | "update", social?: Social) => void;
	remove?: (social: Social) => void;
}
export default function Social({ social, start, remove }: ISocial) {
	return (
		<Flex
			key={social.id}
			className={cn(
				"group shrink-0 bg-light-surface-surface-container gap-3 font-semibold justify-between",
				getAnimationClass("swing-in-top-fwd"),
			)}
		>
			<span
				className='flex w-full gap-3 active:scale-95 transition cursor-pointer'
				onClick={() => {
					if (start) start("update", social);
				}}
			>
				<Image
					src={SOCIAL_PLATFORM_ICONS[social.platform]}
					width={24}
					height={24}
					alt={social.platform}
				/>
				{social.platform}
			</span>
			{remove && (
				<Trash2
					className='stroke-light-error active:scale-95 transition group-hover:block hidden cursor-pointer'
					onClick={() => remove(social)}
				/>
			)}
		</Flex>
	);
}
