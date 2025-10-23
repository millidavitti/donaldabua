import { Technology } from "@/data/dashboard/dashboard-atoms/types";
import { payload_view_atom } from "@/data/dashboard/dashboard-atoms/data";
import { createId } from "@paralleldrive/cuid2";
import { useQueryClient } from "@tanstack/react-query";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";
import { toast } from "sonner";

export default function useAddTechnologies() {
	const [payload_view] = useAtom(payload_view_atom);
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [inputTechnology, setInputTechnology] = useState<string>("");
	const queryClient = useQueryClient();

	function remove(tech: Technology) {
		const technologies = payload_view.data?.technologies as Technology[];
		queryClient.setQueryData(
			["payload_view"],
			(payload_view: Record<string, unknown>) => {
				return {
					...payload_view,
					technologies: technologies.filter((technology) => {
						return technology.id !== tech.id;
					}),
				};
			},
		);
	}

	function addTechnology() {
		const technologies = payload_view.data?.technologies as Technology[];
		const hasInputTechnology = technologies.some((tech) => {
			const incomingTech = inputTechnology.toLowerCase().replaceAll(" ", "");
			const existingTech = tech.name.toLowerCase().replaceAll(" ", "");

			return incomingTech === existingTech;
		});

		if (inputTechnology && !hasInputTechnology)
			queryClient.setQueryData(
				["payload_view"],
				(payload_view: Record<string, unknown>) => {
					return {
						...payload_view,
						technologies: [
							{ id: createId(), name: inputTechnology },
							...technologies,
						],
					};
				},
			);
		else if (hasInputTechnology) toast.info("Technology already exists");
		setInputTechnology("");
		setSearchResult([]);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {
		const technologies = payload_view.data.technologies as Technology[];
		setTimeout(() => {
			setSearchResult(technologies);

			document.addEventListener(
				"click",
				(e) => {
					if (!(e.target as HTMLElement).closest("#search-result"))
						setSearchResult([]);
				},
				{
					once: true,
				},
			);
		}, 200);
	}

	function captureAndSearch(value: string) {
		const technologies = payload_view.data.technologies as Technology[];
		const search = new FuzzySearch(technologies, ["name"]);
		const result = search.search(value);
		setInputTechnology(value);
		if (value) setSearchResult(result);
		else setSearchResult(technologies);
	}

	return {
		remove,
		addTechnology,
		captureAndSearch,
		displaySearchResult,
		closeSearchResult,
		technologies: payload_view.data?.technologies as Technology[],
		searchResult,
		searchQuery: inputTechnology,
	};
}

// defaultStore.sub(technologies_jotai, () => {
// 	defaultStore.set(
// 		profile_hay_stack_jotai,
// 		defaultStore
// 			.get(technologies_jotai)
// 			.filter(
// 				(technology) =>
// 					!defaultStore
// 						.get(profile_technologies_jotai)
// 						.some((tech) => tech.id === technology.id),
// 			),
// 	);
// });
