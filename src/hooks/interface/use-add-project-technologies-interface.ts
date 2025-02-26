import {
	project_technologies_jotai,
	Technology,
	hay_stack_jotai,
} from "@/data/atoms/app_data";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useAddProjectTechnologiesInterface() {
	const [project_technologies, project_technologies_setter] = useAtom(
		project_technologies_jotai,
	);
	const [hay_stack, hay_stack_setter] = useAtom<Technology[]>(hay_stack_jotai);
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	function removeTechnology(tech: Technology) {
		project_technologies_setter((technologies) =>
			technologies.filter((technology) => {
				return technology.id !== tech.id;
			}),
		);
		hay_stack_setter((technologies) => [...technologies, tech]);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {
		setTimeout(() => {
			setSearchResult(hay_stack);
			document.onclick = (e) => {
				if (!(e.target as HTMLElement).closest("#search-result"))
					setSearchResult([]);
				document.onclick = null;
			};
		}, 200);
	}

	function captureAndSearch(value: string) {
		const search = new FuzzySearch(hay_stack, ["name"]);
		const result = search.search(value);
		setSearchQuery(value);
		if (value) setSearchResult(result);
		else setSearchResult(hay_stack);
	}

	function addTechnology(tech: Technology) {
		project_technologies_setter((technology) => {
			return [tech, ...technology];
		});
		hay_stack_setter((technologies) =>
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
