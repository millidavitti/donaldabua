import Flex from "@/components/layouts/flex";
import { X } from "lucide-react";
import useDraftTechnologies from "@/app/(dashboard)/components/draft/interfaces/use-draft-technologies.interface";
import { DELAY } from "@/data/constants";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import Button from "@/components/ui/button";

export default function DraftTechnologies() {
	const {
		select,
		search,
		close,
		input_project_technologies,
		remove,
		searchQuery,
		searchResult,
	} = useDraftTechnologies();
	return (
		<>
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='select-project-technology'
			>
				Technologies
			</label>
			{Boolean(input_project_technologies.length) && (
				<Flex className='gap-3 p-0 overflow-x-auto border-0 shrink-0'>
					{input_project_technologies.map((tech, index) => (
						<Flex
							key={index}
							className={cn(
								"gap-3 items-center self-start shrink-0",
								getAnimationClass("swing-in-top-fwd"),
							)}
							style={{ animationDelay: index * DELAY + "ms" }}
						>
							<p className='font-medium'>{tech.name}</p>
							<X
								size={20}
								className='stroke-light-error cursor-pointer active:scale-[.95] shrink-0'
								onClick={() => {
									remove(tech);
								}}
							/>
						</Flex>
					))}
				</Flex>
			)}
			<Flex
				flex='column'
				className='h-0 gap-3 p-0 mb-12 overflow-visible border-0'
			>
				<input
					type='text'
					id='select-project-technology'
					className='w-full p-3 border shrink-0'
					value={searchQuery}
					onKeyDown={(e) => {
						if (e.key === "Escape") close();
					}}
					onFocus={() => search("")}
					onChange={(e) => search(e.target.value)}
				/>

				{/* Search Result */}
				{Boolean(searchResult.length) && (
					<Flex
						flex='column'
						className='gap-3 bg-light-surface mx-3 max-h-[320px] z-10 shrink-0'
						id='search-result'
					>
						{searchResult.map((tech, i) => {
							return (
								<Flex
									key={tech.id}
									className={cn(
										"shrink-0 active:scale-95 transition cursor-pointer bg-light-surface-surface-container",
										getAnimationClass("swing-in-top-fwd"),
									)}
									style={{ animationDelay: i * DELAY + "ms" }}
									onClick={() => select(tech)}
								>
									{tech.name}
								</Flex>
							);
						})}
						<Button
							className='sticky bottom-0 text-white bg-black'
							onClick={() => close()}
						>
							Cancel
						</Button>
					</Flex>
				)}
			</Flex>
		</>
	);
}
