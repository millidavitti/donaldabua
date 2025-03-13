import Flex from "@/components/layouts/flex";
import useSelectSocialPlatformInterface from "@/hooks/interface/use-select-social-platform-interface";

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
						{searchResult.map((socialPlatforms) => {
							return (
								<Flex
									key={socialPlatforms}
									className='shrink-0 active:scale-95 transition cursor-pointer bg-light-surface-surface-container'
									htmlProps={{
										onClick() {
											addTechnology(socialPlatforms);
										},
									}}
								>
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
