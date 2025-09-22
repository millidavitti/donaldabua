import Flex from "@/components/layouts/flex";
import { X } from "lucide-react";
import useDraftProjectTechnologies from "@/hooks/interface/dashboard/use-draft-project-technologies.interface";
import { DELAY } from "@/data/dashboard/dashboard-constants";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import Button from "@/components/ui/button";

export default function DraftProjectTechnologies() {
	const {
		select,
		search,
		close,
		input_project_technologies,
		remove,
		searchQuery,
		searchResult,
	} = useDraftProjectTechnologies();
	return (
		<>
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='select-project-technology'
			>
				Technologies
			</label>
			{Boolean(input_project_technologies.length) && (
				<Flex className='gap-3 shrink-0 overflow-x-auto border-0 p-0'>
					{input_project_technologies.map((tech) => (
						<Flex className='gap-3 items-center shrink-0' key={tech.id}>
							<p className='shrink-0 font-medium'>{tech.name}</p>
							<X
								size={24}
								className='stroke-light-error cursor-pointer active:scale-[.95]'
								onClick={() => {
									remove(tech);
								}}
							/>
						</Flex>
					))}
				</Flex>
			)}
			<Flex flex='column' className='relative overflow-visible border-0 p-0'>
				<input
					type='text'
					id='select-project-technology'
					className='border p-3 w-full'
					value={searchQuery}
					onKeyDown={(e) => {
						close(e.key);
					}}
					onChange={(e) => {
						search(e.target.value);
					}}
				/>

				{/* Search Result */}
				{Boolean(searchResult.length) && (
					<Flex
						flex='column'
						className='absolute gap-3 bg-light-surface top-16 inset-x-0 mx-3 max-h-[320px] z-10'
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
											select(tech);
										},
										style: { animationDelay: i * DELAY + "ms" },
									}}
								>
									{tech.name}
								</Flex>
							);
						})}
						<Button
							className='sticky bottom-0 bg-black text-white'
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
