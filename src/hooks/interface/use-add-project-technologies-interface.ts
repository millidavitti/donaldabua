import {
	project_technologies_jotai,
	Technology,
	profile_technologies_jotai,
} from "@/data/atoms/app_data";
import FuzzySearch from "fuzzy-search";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";

export default function useAddProjectTechnologiesInterface() {
	const [project_technologies, project_technologies_setter] = useAtom(
		project_technologies_jotai,
	);
	const profile_technologies = useAtomValue(profile_technologies_jotai);
	const [hayStack, setHayStack] = useState<Technology[]>(() =>
		profile_technologies.filter(
			(technology) =>
				!project_technologies.some((tech) => technology.id === tech.id),
		),
	);
	console.log("Search Result:\n", hayStack);
	// console.log("Profile Technologies:\n", profile_technologies);
	// console.log("Project Technologies:\n", project_technologies);

	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	function removeTechnology(tech: Technology) {
		project_technologies_setter((technologies) =>
			technologies.filter((technology) => technology.id !== tech.id),
		);
		setHayStack((technologies) => [...technologies, tech]);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {
		setTimeout(() => {
			setSearchResult(hayStack);
			document.onclick = (e) => {
				if (!(e.target as HTMLElement).closest("#search-result"))
					setSearchResult([]);
				document.onclick = null;
			};
		}, 200);
	}

	function captureAndSearch(value: string) {
		const search = new FuzzySearch(hayStack, ["name"]);
		const result = search.search(value);
		setSearchQuery(value);
		if (value) setSearchResult(result);
		else setSearchResult(hayStack);
	}

	function addTechnology(tech: Technology) {
		project_technologies_setter((technology) => {
			return [tech, ...technology];
		});
		setHayStack((technologies) =>
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
		project_technologies,
		searchResult,
		searchQuery,
	};
}
