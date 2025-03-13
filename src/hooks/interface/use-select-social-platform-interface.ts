import {
	profile_technologies_jotai,
	profile_hay_stack_jotai,
	defaultStore,
	technologies_jotai,
	SocialPlatforms,
	social_account_jotai,
} from "@/data/atoms/app_data";
import { SOCIAL_PLATFORMS } from "@/data/constants";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useSelectSocialPlatformInterface() {
	const platforms = [...SOCIAL_PLATFORMS];
	const [searchResult, setSearchResult] =
		useState<SocialPlatforms[]>(platforms);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [social_account, social_account_setter] = useAtom(social_account_jotai);

	function addTechnology(platform: SocialPlatforms) {
		social_account_setter((social_account) => {
			return { ...social_account, platform };
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
		social_account_setter((social_account) => {
			return { ...social_account, platform: "" };
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
		platform: social_account.platform,
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
