import Flex from "@/components/layouts/flex";
import React from "react";

export default function Sidebar() {
	return (
		<Flex className='basis-80 grow gap-3 shrink-0' flex='column'>
			<h2>Sidebar</h2>
			<Flex className='grow'></Flex>
			<Flex className='grow'></Flex>
		</Flex>
	);
}
