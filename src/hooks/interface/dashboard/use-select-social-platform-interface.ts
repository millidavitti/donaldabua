import {
	profile_technologies_jotai,
	profile_hay_stack_jotai,
	defaultStore,
	technologies_jotai,
	SocialPlatforms,
	input_social_atom,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { SOCIAL_PLATFORMS } from "@/data/dashboard/dashboard-constants";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useSelectSocialPlatformInterface() {
	const platforms = [...SOCIAL_PLATFORMS];
	const [searchResult, setSearchResult] =
		useState<SocialPlatforms[]>(platforms);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [input_socials, set_input_socials] = useAtom(input_social_atom);

	function addTechnology(platform: SocialPlatforms) {
		set_input_socials((input_socials) => {
			return { ...input_socials, platform };
		});
		setSearchQuery("");
		setSearchResult([]);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {
		setTimeout(() => {
			setSearchResult(platforms);
			document.onclick = (e) => {
				if (!(e.target as HTMLElement).closest("#search-result"))
					setSearchResult([]);
				document.onclick = null;
			};
		}, 200);
	}

	function captureAndSearch(value: string) {
		const search = new FuzzySearch(platforms);
		const result = search.search(value);
		set_input_socials((social_account) => {
			return { ...social_account, platform: "Facebook" };
		});
		setSearchQuery(value);
		if (value) setSearchResult(result);
		else setSearchResult(platforms);
	}

	return {
		addTechnology,
		captureAndSearch,
		displaySearchResult,
		closeSearchResult,
		searchResult,
		searchQuery,
		platform: input_socials.platform,
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
