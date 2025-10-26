import { Technology } from "@/data/types";
import {
	input_project_technologies_atom,
	payload_view_atom,
} from "@/data/data";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useDraftTechnologies() {
	const [searchResult, setSearchResult] = useState<Technology[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [input_project_technologies, set_input_project_technologies] = useAtom(
		input_project_technologies_atom,
	);

	const [payload_view] = useAtom(payload_view_atom);

	const close = () => {
		setSearchResult([]);
		setSearchQuery("");
	};

	const technologies = payload_view.data?.technologies as Technology[];
	const search = (searchQuery: string) => {
		const tech = new FuzzySearch(technologies, ["name"]);
		const symmetricDifference = new Set([
			...tech.search(searchQuery).map((t) => t.id),
			...technologies.map((t) => t.id),
		]).symmetricDifference(
			new Set(input_project_technologies.map((t) => t.id)),
		);

		const searchResult = technologies.filter((tech) =>
			symmetricDifference.has(tech.id),
		);

		setSearchQuery(searchQuery);
		setSearchResult(searchResult);
	};

	const select = (technology: Technology) => {
		const technologies = new Set([technology, ...input_project_technologies]);
		const searchResult = [
			...new Set(technologies).symmetricDifference(new Set(technologies)),
		];

		setSearchResult(searchResult);
		set_input_project_technologies([...technologies]);
	};

	const remove = (tech: Technology) => {
		const technologies = input_project_technologies.filter(
			(technology) => technology.id !== tech.id,
		);
		const searchResult = [
			...new Set(technologies).symmetricDifference(new Set(technologies)),
		];
		setSearchResult(searchResult);
		set_input_project_technologies(technologies);
	};

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
