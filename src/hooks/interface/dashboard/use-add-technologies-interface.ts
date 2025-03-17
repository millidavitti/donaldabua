import {
	Technology,
	technologies_jotai,
	technologies_hay_stack_jotai,
	technologies_snapshot_jotai,
	defaultStore,
	profile_hay_stack_jotai,
	profile_technologies_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { createId } from "@paralleldrive/cuid2";
import FuzzySearch from "fuzzy-search";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { toast } from "sonner";

export default function useAddTechnologiesInterface() {
	const [technologies, technologies_setter] = useAtom(technologies_jotai);
	const technologies_hay_stack = useAtomValue<Technology[]>(
		technologies_hay_stack_jotai,
	);
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	function removeTechnology(tech: Technology) {
		technologies_setter((technologies) =>
			technologies.filter((technology) => {
				return technology.id !== tech.id;
			}),
		);
	}

	function addTechnology() {
		const exists = defaultStore
			.get(technologies_snapshot_jotai)
			.some(
				(tech) =>
					searchQuery.toLowerCase().replaceAll(" ", "") ===
					tech.name.toLowerCase().replaceAll(" ", ""),
			);
		if (searchQuery && !exists)
			technologies_setter((technologies) => {
				return [{ id: createId(), name: searchQuery }, ...technologies];
			});
		else if (exists) toast.info("Technology already exists");
		setSearchQuery("");
		setSearchResult([]);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {
		setTimeout(() => {
			setSearchResult(technologies_hay_stack);
			document.onclick = (e) => {
				if (!(e.target as HTMLElement).closest("#search-result"))
					setSearchResult([]);
				document.onclick = null;
			};
		}, 200);
	}

	function captureAndSearch(value: string) {
		const search = new FuzzySearch(technologies_hay_stack, ["name"]);
		const result = search.search(value);
		setSearchQuery(value);
		if (value) setSearchResult(result);
		else setSearchResult(technologies_hay_stack);
	}

	return {
		removeTechnology,
		addTechnology,
		captureAndSearch,
		displaySearchResult,
		closeSearchResult,
		technologies,
		searchResult,
		searchQuery,
	};
}

defaultStore.sub(technologies_jotai, () => {
	defaultStore.set(
		technologies_hay_stack_jotai,
		defaultStore.get(technologies_jotai),
	);

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
