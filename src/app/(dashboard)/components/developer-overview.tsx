import Flex from "@/components/layouts/flex";
import React from "react";
import DeveloperSummary from "./developer-summary";
import Portfolio from "./portfolio";
import Skills from "./skills";

export default function DeveloperOverview() {
	return (
		<Flex className='grow-[2] gap-3' flex='column'>
			<h2 className='shrink-0'>Developer Overview</h2>
			<DeveloperSummary />
			<Portfolio />
			<Skills />
		</Flex>
	);
}
