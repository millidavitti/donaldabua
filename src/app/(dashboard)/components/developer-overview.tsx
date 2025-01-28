import Flex from "@/components/layouts/flex";
import React from "react";
import DeveloperSummary from "./edit-developer-summary";
import Portfolio from "./portfolio";
import Skills from "./skills";

export default function DeveloperOverview() {
	return (
		<Flex className='basis-[720px] grow-[2] gap-3' flex='column'>
			<h2 className='shrink-0'>Developer Overview</h2>
			<DeveloperSummary />
			<Portfolio />
			<Skills />
		</Flex>
	);
}
