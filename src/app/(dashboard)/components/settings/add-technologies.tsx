import Flex from "@/components/layouts/flex";
import { Plus, X } from "lucide-react";
import ProfileTechnology from "../profile-technology";
import useAddTechnologiesInterface from "@/hooks/interface/dashboard/use-add-technologies-interface";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import { DELAY } from "@/data/dashboard/dashboard-constants";

export default function AddTechnologies() {
	const {
		addTechnology,
		captureAndSearch,
		closeSearchResult,
		displaySearchResult,
		technologies,
		removeTechnology,
		searchQuery,
		searchResult,
	} = useAddTechnologiesInterface();
	return (
		<>
			{Boolean(technologies.length) && (
				<Flex className='gap-3 flex-wrap shrink-0 grow'>
					{technologies.map((technology, i) => (
						<ProfileTechnology tech={technology} key={technology.id} index={i}>
							<X
								size={24}
								className='stroke-light-error cursor-pointer active:scale-[.95]'
								onClick={() => removeTechnology(technology)}
							/>
						</ProfileTechnology>
					))}
				</Flex>
			)}
			<Flex flex='column' className='relative overflow-visible gap-3'>
				<Flex className='gap-3'>
					<input
						type='text'
						id='select-technology'
						className='outline p-3 w-full'
						value={searchQuery}
						onKeyDown={(e) => closeSearchResult(e.key)}
						onFocus={() => displaySearchResult()}
						onChange={(e) => captureAndSearch(e.target.value)}
					/>
					<InteractiveIcon
						className='shrink-0 flex items-center'
						callback={addTechnology}
					>
						<Plus />
					</InteractiveIcon>
				</Flex>

				{/* Search Result */}
				{Boolean(searchResult.length) && (
					<Flex
						flex='column'
						className='gap-3 bg-light-surface max-h-36 no-scrollbar'
						htmlProps={{
							id: "search-result",
						}}
					>
						{searchResult.map((tech, i) => {
							return (
								<Flex
									key={tech.id}
									className={cn(
										"shrink-0 cursor-pointer bg-light-surface-surface-container",
										getAnimationClass("swing-in-top-fwd"),
									)}
									htmlProps={{ style: { animationDelay: i * DELAY + "ms" } }}
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
