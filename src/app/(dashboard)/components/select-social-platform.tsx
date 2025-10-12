import Flex from "@/components/layouts/flex";
import {
	DELAY,
	SOCIAL_PLATFORM_ICONS,
} from "@/data/dashboard/dashboard-constants";
import useSelectSocialPlatform from "@/hooks/interface/dashboard/use-select-social-platform.interface";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function SelectSocialPlatform() {
	const {
		select,
		search,
		closeSearchResult,
		searchResult,
		searchQuery,
		platform,
	} = useSelectSocialPlatform();
	return (
		<>
			<Flex flex='column' className='relative overflow-visible gap-3'>
				<label className='text-xl font-semibold shrink-0' htmlFor='title'>
					Platform
				</label>
				<input
					type='text'
					id='select-technology'
					className='border p-3 w-full shrink-0'
					required
					value={searchQuery ?? platform}
					onKeyDown={(e) => {
						closeSearchResult(e.key);
					}}
					onFocus={(e) => {
						e.currentTarget.select();
						search(e.currentTarget.value);
					}}
					onChange={(e) => {
						search(e.currentTarget.value);
					}}
				/>

				{/* Search Result */}
				{Boolean(searchResult.length) && (
					<Flex
						flex='column'
						className='gap-3 bg-light-surface max-h-36 no-scrollbar'
						htmlProps={{
							id: "search-result",
						}}
					>
						{searchResult.map((platform, i) => {
							return (
								<Flex
									key={platform}
									className={cn(
										"shrink-0 active:scale-95 transition cursor-pointer bg-light-surface-surface-container gap-3 font-semibold",
										getAnimationClass("swing-in-top-fwd"),
									)}
									htmlProps={{
										onClick() {
											select(platform);
										},
										style: { animationDelay: i * DELAY + "ms" },
									}}
								>
									<Image
										src={SOCIAL_PLATFORM_ICONS[platform]}
										width={24}
										height={24}
										alt={platform}
									/>
									{platform}
								</Flex>
							);
						})}
					</Flex>
				)}
			</Flex>
		</>
	);
}
