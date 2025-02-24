import Flex from "@/components/layouts/flex";
import {
	defaultStore,
	project_technologies_jotai,
	technologies_jotai,
	Technology,
} from "@/data/atoms/app_data";
import { useAtom, useAtomValue } from "jotai";
import { X } from "lucide-react";
import React, { useState } from "react";
import FuzzySearch from "fuzzy-search";
export default function AddProjectTechnologies() {
	const [project_technologies, project_technologies_setter] = useAtom(
		project_technologies_jotai,
	);
	const technologies = useAtomValue(technologies_jotai);
	const [hayStack, setHayStack] = useState<Technology[]>(technologies);
	defaultStore.sub(technologies_jotai, () => {
		setHayStack(defaultStore.get(technologies_jotai));
	});
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");
	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
			</label>
			{Boolean(project_technologies.length) && (
				<Flex className='gap-3 shrink-0 outline-none overflow-x-auto no-scrollbar'>
					{project_technologies.map((tech) => (
						<Flex className='gap-3 items-center shrink-0' key={tech.id}>
							<p className='shrink-0 font-medium'>{tech.name}</p>
							<X
								size={24}
								className='stroke-light-error cursor-pointer active:scale-[.95]'
								onClick={() => {
									project_technologies_setter((technologies) =>
										technologies.filter(
											(technology) => technology.id !== tech.id,
										),
									);
									setHayStack((technologies) => [...technologies, tech]);
								}}
							/>
						</Flex>
					))}
				</Flex>
			)}
			<Flex
				flex='column'
				className='relative overflow-visible'
				htmlProps={{
					onKeyDown(e) {
						if (e.key === "Escape") setSearchResult([]);
					},
				}}
			>
				<input
					type='text'
					required
					className='outline p-3 w-full'
					value={searchQuery}
					onFocus={() =>
						setTimeout(() => {
							setSearchResult(hayStack);
							document.onclick = (e) => {
								if (!(e.target as HTMLElement).closest("#search-result"))
									setSearchResult([]);
								console.log("I was clicked!");
								document.onclick = null;
							};
						}, 200)
					}
					onChange={(e) => {
						const search = new FuzzySearch(hayStack, ["name"]);
						const result = search.search(e.target.value);
						setSearchQuery(e.target.value);
						if (e.target.value) setSearchResult(result);
						else setSearchResult(hayStack);
					}}
				/>

				{/* Search Result */}
				{Boolean(searchResult.length) && (
					<Flex
						flex='column'
						className='absolute gap-3 bg-light-surface bottom-0 inset-x-0 mx-3 max-h-36  no-scrollbar'
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
											project_technologies_setter((technology) => {
												return [tech, ...technology];
											});
											setHayStack((technologies) =>
												technologies.filter(
													(technology) => technology.id !== tech.id,
												),
											);
											setSearchQuery("");
											setSearchResult([]);
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
