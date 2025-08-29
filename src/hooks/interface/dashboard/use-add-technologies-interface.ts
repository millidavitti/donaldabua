import { Technology } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { payload_view_atom } from "@/data/dashboard/dashboard-atoms/data";
import { createId } from "@paralleldrive/cuid2";
import { useQueryClient } from "@tanstack/react-query";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";
import { toast } from "sonner";

export default function useAddTechnologiesInterface() {
	const [payload_view] = useAtom(payload_view_atom);
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [technology, setTechnology] = useState<string>("");
	const queryClient = useQueryClient();

	function removeTechnology(tech: Technology) {
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
		const hasTech = technologies.some((tech) => {
			const incomingTech = technology.toLowerCase().replaceAll(" ", "");
			const existingTech = tech.name.toLowerCase().replaceAll(" ", "");

			return incomingTech === existingTech;
		});

		if (technology && !hasTech)
			queryClient.setQueryData(
				["payload_view"],
				(payload_view: Record<string, unknown>) => {
					return {
						...payload_view,
						technologies: [
							{ id: createId(), name: technology },
							...technologies,
						],
					};
				},
			);
		else if (hasTech) toast.info("Technology already exists");
		setTechnology("");
		setSearchResult([]);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {
		const technologies = payload_view.data.technologies as Technology[];
		setTimeout(() => {
			setSearchResult(technologies);
			document.onclick = (e) => {
				if (!(e.target as HTMLElement).closest("#search-result"))
					setSearchResult([]);
				document.onclick = null;
			};
		}, 200);
	}

	function captureAndSearch(value: string) {
		const technologies = payload_view.data.technologies as Technology[];
		const search = new FuzzySearch(technologies, ["name"]);
		const result = search.search(value);
		setTechnology(value);
		if (value) setSearchResult(result);
		else setSearchResult(technologies);
	}

	return {
		removeTechnology,
		addTechnology,
		captureAndSearch,
		displaySearchResult,
		closeSearchResult,
		technologies: payload_view.data?.technologies as Technology[],
		searchResult,
		searchQuery: technology,
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
