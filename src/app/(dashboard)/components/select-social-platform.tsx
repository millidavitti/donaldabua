import Flex from "@/components/layouts/flex";
import { DELAY, SOCIAL_PLATFORM_ICONS } from "@/data/constants";
import useSelectSocialPlatformInterface from "@/hooks/interface/use-select-social-platform-interface";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function SelectSocialPlatform() {
	const {
		addTechnology,
		captureAndSearch,
		closeSearchResult,
		displaySearchResult,
		searchQuery,
		searchResult,
		platform,
	} = useSelectSocialPlatformInterface();
	return (
		<>
			<Flex flex='column' className='relative overflow-visible gap-3'>
				<label className='text-xl font-semibold shrink-0' htmlFor='title'>
					Platform
				</label>
				<input
					type='text'
					id='select-technology'
					className='outline p-3 w-full shrink-0'
					required
					value={searchQuery || platform}
					onKeyDown={(e) => {
						closeSearchResult(e.key);
					}}
					onFocus={() => displaySearchResult()}
					onChange={(e) => {
						captureAndSearch(e.target.value);
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
						{searchResult.map((socialPlatforms, i) => {
							return (
								<Flex
									key={socialPlatforms}
									className={cn(
										"shrink-0 active:scale-95 transition cursor-pointer bg-light-surface-surface-container gap-3 font-semibold",
										getAnimationClass("swing-in-top-fwd"),
									)}
									htmlProps={{
										onClick() {
											addTechnology(socialPlatforms);
										},
										style: { animationDelay: i * DELAY + "ms" },
									}}
								>
									<Image
										src={SOCIAL_PLATFORM_ICONS[socialPlatforms]}
										width={24}
										height={24}
										alt={socialPlatforms}
									/>
									{socialPlatforms}
								</Flex>
							);
						})}
					</Flex>
				)}
			</Flex>
		</>
	);
}
