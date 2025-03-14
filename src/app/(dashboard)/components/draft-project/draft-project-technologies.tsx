import Flex from "@/components/layouts/flex";
import { X } from "lucide-react";
import useDraftProjectTechnologiesInterface from "@/hooks/interface/use-draft-project-technologies-interface";
import { DELAY } from "@/data/constants";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";

export default function DraftProjectTechnologies() {
	const {
		addTechnology,
		captureAndSearch,
		closeSearchResult,
		displaySearchResult,
		project_technologies,
		removeTechnology,
		searchQuery,
		searchResult,
	} = useDraftProjectTechnologiesInterface();
	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Technologies
			</label>
			{Boolean(project_technologies.length) && (
				<Flex className='gap-3 shrink-0 overflow-x-auto no-scrollbar'>
					{project_technologies.map((tech) => (
						<Flex className='gap-3 items-center shrink-0' key={tech.id}>
							<p className='shrink-0 font-medium'>{tech.name}</p>
							<X
								size={24}
								className='stroke-light-error cursor-pointer active:scale-[.95]'
								onClick={() => {
									removeTechnology(tech);
								}}
							/>
						</Flex>
					))}
				</Flex>
			)}
			<Flex flex='column' className='relative overflow-visible'>
				<input
					type='text'
					id='select-technology'
					className='outline p-3 w-full'
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
						className='absolute gap-3 bg-light-surface top-16 inset-x-0 mx-3 max-h-36 z-10 no-scrollbar'
						htmlProps={{
							id: "search-result",
						}}
					>
						{searchResult.map((tech, i) => {
							return (
								<Flex
									key={tech.id}
									className={cn(
										"shrink-0 active:scale-95 transition cursor-pointer bg-light-surface-surface-container",
										getAnimationClass("swing-in-top-fwd"),
									)}
									htmlProps={{
										onClick() {
											addTechnology(tech);
										},
										style: { animationDelay: i * DELAY + "ms" },
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
