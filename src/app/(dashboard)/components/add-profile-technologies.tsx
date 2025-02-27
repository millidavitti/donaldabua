import Flex from "@/components/layouts/flex";
import { X } from "lucide-react";
import useAddProfileTechnologiesInterface from "@/hooks/interface/use-add-profile-technologies-interface";
import ProfileTechnology from "./profile-technology";

export default function AddProfileTechnologies() {
	const {
		addTechnology,
		captureAndSearch,
		closeSearchResult,
		displaySearchResult,
		profile_technologies,
		removeTechnology,
		searchQuery,
		searchResult,
	} = useAddProfileTechnologiesInterface();
	return (
		<>
			<Flex className='gap-3 flex-wrap shrink-0 grow'>
				{profile_technologies.map((technology) => (
					<ProfileTechnology tech={technology} key={technology.id}>
						<X
							size={24}
							className='stroke-light-error cursor-pointer active:scale-[.95]'
							onClick={() => removeTechnology(technology)}
						/>
					</ProfileTechnology>
				))}
			</Flex>
			<Flex flex='column' className='relative overflow-visible gap-3'>
				<input
					type='text'
					id='select-technology'
					className='outline p-3 w-full shrink-0'
					value={searchQuery}
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
						{searchResult.map((tech) => {
							return (
								<Flex
									key={tech.id}
									className='shrink-0 active:scale-95 transition cursor-pointer bg-light-surface-surface-container'
									htmlProps={{
										onClick() {
											addTechnology(tech);
										},
									}}
								>
									{tech.name}
								</Flex>
							);
						})}
					</Flex>
				)}
			</Flex>
		</>
	);
}
