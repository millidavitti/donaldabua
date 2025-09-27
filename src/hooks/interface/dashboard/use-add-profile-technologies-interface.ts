import { Technology } from "@/data/dashboard/dashboard-atoms/types";
import { useState } from "react";

export default function useAddProfileTechnologiesInterface() {
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery] = useState<string>("");

	function removeTechnology(tech: Technology) {
		console.log(tech);
	}

	function addTechnology(tech: Technology) {
		console.log(tech);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {}

	function captureAndSearch(searchQuery: string) {
		console.log(searchQuery);
	}

	return {
		removeTechnology,
		addTechnology,
		captureAndSearch,
		displaySearchResult,
		closeSearchResult,
		profile_technologies: [] as Technology[],
		searchResult,
		searchQuery,
	};
}
