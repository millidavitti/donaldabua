import { input_social_atom } from "@/data/dashboard/dashboard-atoms/data";
import { SocialPlatforms } from "@/data/dashboard/dashboard-atoms/types";
import { SOCIAL_PLATFORMS } from "@/data/dashboard/dashboard-constants";
import FuzzySearch from "fuzzy-search";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useSelectSocialPlatform() {
	const [searchResult, setSearchResult] = useState<SocialPlatforms[]>([]);
	const [searchQuery, setSearchQuery] = useState<string | null>(null);
	const [input_socials, set_input_socials] = useAtom(input_social_atom);

	function select(platform: SocialPlatforms) {
		set_input_socials({ ...input_socials, platform });
		setSearchResult([]);
		setSearchQuery(null);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function search(searchQuery: string) {
		const platforms = new FuzzySearch(SOCIAL_PLATFORMS);
		const searchResult = platforms.search(searchQuery);

		setSearchResult(searchResult);
		setSearchQuery(searchQuery);
	}

	return {
		select,
		search,
		closeSearchResult,
		searchResult,
		searchQuery,
		platform: input_socials.platform,
	};
}
