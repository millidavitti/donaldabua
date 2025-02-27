import {
	profile_technologies_jotai,
	Technology,
	profile_hay_stack_jotai,
	defaultStore,
	technologies_jotai,
} from "@/data/atoms/app_data";
import FuzzySearch from "fuzzy-search";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";

export default function useAddProfileTechnologiesInterface() {
	const [profile_technologies, profile_technologies_setter] = useAtom(
		profile_technologies_jotai,
	);
	const profile_hay_stack = useAtomValue<Technology[]>(profile_hay_stack_jotai);
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	function removeTechnology(tech: Technology) {
		profile_technologies_setter((technologies) =>
			technologies.filter((technology) => {
				return technology.id !== tech.id;
			}),
		);
	}

	function addTechnology(tech: Technology) {
		profile_technologies_setter((technologies) => {
			return [tech, ...technologies];
		});
		setSearchQuery("");
		setSearchResult([]);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {
		setTimeout(() => {
			setSearchResult(profile_hay_stack);
			document.onclick = (e) => {
				if (!(e.target as HTMLElement).closest("#search-result"))
					setSearchResult([]);
				document.onclick = null;
			};
		}, 200);
	}

	function captureAndSearch(value: string) {
		const search = new FuzzySearch(profile_hay_stack, ["name"]);
		const result = search.search(value);
		setSearchQuery(value);
		if (value) setSearchResult(result);
		else setSearchResult(profile_hay_stack);
	}

	return {
		removeTechnology,
		addTechnology,
		captureAndSearch,
		displaySearchResult,
		closeSearchResult,
		profile_technologies,
		searchResult,
		searchQuery,
	};
}

defaultStore.sub(profile_technologies_jotai, () => {
	// Set Profile Technology Haystack
	defaultStore.set(
		profile_hay_stack_jotai,
		defaultStore
			.get(technologies_jotai)
			.filter(
				(technology) =>
					!defaultStore
						.get(profile_technologies_jotai)
						.some((tech) => tech.id === technology.id),
			),
	);
});
