import Flex from "@/components/layouts/flex";
import { Plus, X } from "lucide-react";
import useAddTechnologies from "@/app/(dashboard)/components/settings/interfaces/use-add-technologies-interface";
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
		remove,
		searchQuery,
		searchResult,
	} = useAddTechnologies();
	return (
		<>
			{Boolean(technologies.length) && (
				<Flex className='flex-wrap gap-3 p-0 border-0 shrink-0 grow'>
					{technologies.map((technology, index) => (
						<Flex
							className={cn(
								"gap-3 items-center self-start shrink-0",
								getAnimationClass("swing-in-top-fwd"),
							)}
							style={{ animationDelay: index * DELAY + "ms" }}
						>
							<p className='font-medium'>{technology.name}</p>
							<X
								size={20}
								className='stroke-light-error cursor-pointer active:scale-[.95] shrink-0'
								onClick={() => {
									remove(technology);
								}}
							/>
						</Flex>
					))}
				</Flex>
			)}
			<Flex
				flex='column'
				className='relative gap-3 p-0 overflow-visible border-0'
			>
				<Flex className='gap-3'>
					<input
						type='text'
						id='select-technology'
						className='w-full p-3 border'
						value={searchQuery}
						onKeyDown={(e) => closeSearchResult(e.key)}
						onFocus={() => displaySearchResult()}
						onChange={(e) => captureAndSearch(e.target.value)}
					/>
					<InteractiveIcon
						className='flex items-center shrink-0'
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
						id='search-result'
					>
						{searchResult.map((tech, i) => {
							return (
								<Flex
									key={tech.id}
									className={cn(
										"shrink-0 cursor-pointer bg-light-surface-surface-container",
										getAnimationClass("swing-in-top-fwd"),
									)}
									style={{ animationDelay: i * DELAY + "ms" }}
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
