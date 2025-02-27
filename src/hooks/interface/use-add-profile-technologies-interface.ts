import {
	profile_technologies_snapshot_jotai,
	Technology,
	profile_hay_stack_jotai,
} from "@/data/atoms/app_data";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useAddProfileTechnologiesInterface() {
	const [profile_technologies, profile_technologies_setter] = useAtom(
		profile_technologies_snapshot_jotai,
	);
	const [profile_hay_stack, profile_hay_stack_setter] = useAtom<Technology[]>(
		profile_hay_stack_jotai,
	);
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	function removeTechnology(tech: Technology) {
		profile_technologies_setter((technologies) =>
			technologies.filter((technology) => {
				return technology.id !== tech.id;
			}),
		);
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

	function addTechnology(tech: Technology) {
		profile_technologies_setter((technology) => {
			return [tech, ...technology];
		});
		profile_hay_stack_setter((technologies) =>
			technologies.filter((technology) => technology.id !== tech.id),
		);
		setSearchQuery("");
		setSearchResult([]);
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
