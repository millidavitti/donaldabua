import { Technology } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import {
	input_project_technologies_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useDraftProjectTechnologies() {
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [input_project_technologies, set_input_project_technologies] = useAtom(
		input_project_technologies_atom,
	);
	const [payload_view] = useAtom(payload_view_atom);

	function remove(tech: Technology) {
		const technologies = input_project_technologies.filter(
			(technology) => technology.id !== tech.id,
		);
		const searchResult = [
			...new Set(
				payload_view.data?.technologies as Technology[],
			).symmetricDifference(new Set(technologies)),
		];
		setSearchResult(searchResult);
		set_input_project_technologies(technologies);
	}

	function close() {
		setSearchResult([]);
		setSearchQuery("");
	}

	function search(searchQuery: string) {
		const technologies = new FuzzySearch(
			payload_view.data?.technologies as Technology[],
			["name"],
		);
		const searchResult = [
			...new Set([
				...technologies.search(searchQuery),
				...(payload_view.data?.technologies as Technology[]),
			]).symmetricDifference(new Set(input_project_technologies)),
		];
		setSearchQuery(searchQuery);
		setSearchResult(searchResult);
	}

	function select(technology: Technology) {
		const technologies = new Set([technology, ...input_project_technologies]);
		const searchResult = [
			...new Set(
				payload_view.data?.technologies as Technology[],
			).symmetricDifference(new Set(technologies)),
		];

		setSearchResult(searchResult);
		set_input_project_technologies([...technologies]);
	}

	return {
		remove,
		select,
		search,
		close,
		input_project_technologies,
		searchResult,
		searchQuery,
	};
}
