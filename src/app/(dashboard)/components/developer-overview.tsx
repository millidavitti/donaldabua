import Flex from "@/components/layouts/flex";
import React from "react";
import EditDeveloperSummary from "./edit-developer-summary";
import EditPortfolio from "./edit-portfolio";
import EditTechStack from "./edit-tech-stack";

export default function DeveloperOverview() {
	return (
		<Flex className='basis-[720px] grow-[2] gap-3' flex='column'>
			<EditDeveloperSummary />
			<EditPortfolio />
			<EditTechStack />
		</Flex>
	);
}
