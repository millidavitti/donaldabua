import { input_social_atom } from "@/data/dashboard/dashboard-atoms/data";
import { SocialPlatforms } from "@/data/dashboard/dashboard-atoms/types";
import { SOCIAL_PLATFORMS } from "@/data/dashboard/dashboard-constants";
import { useAtom } from "jotai";
import { useState } from "react";

export default function useSelectSocialPlatformInterface() {
	const platforms = [...SOCIAL_PLATFORMS];
	const [searchResult, setSearchResult] =
		useState<SocialPlatforms[]>(platforms);
	const [searchQuery] = useState<string>("");
	const [input_socials] = useAtom(input_social_atom);

	function addTechnology(platform: SocialPlatforms) {
		console.log(platform);
	}

	function closeSearchResult(key: string) {
		if (key === "Escape") setSearchResult([]);
	}

	function displaySearchResult() {}

	function captureAndSearch(searchQuery: string) {
		console.log(searchQuery);
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
